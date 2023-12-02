import { useState } from 'react'
import retrieveUser from '../logic/retrieveUser'
import retrievePosts from '../logic/retrievePosts'
import createNewPost from '../logic/createNewPost'
import toggleLikePost from '../logic/toggleLikePost'
import toggleSavePost from '../logic/toggleSavePost'
import retrieveSavedPosts from '../logic/retrieveSavedPosts'
import deletePost from '../logic/deletePost'
import Button from '../components/Button'
import Header from '../components/Header.jsx'
import NewPostForm from '../components/NewPostForm.jsx'
import Post from '../components/Post.jsx'
import SavedPosts from '../components/SavedPosts.jsx'

function Home(props) {
    console.log('Home')

    const [view, setView] = useState(null)

    const [timestamp, setTimestamp] = useState(null)

    const [saved, setSaved] = useState(null)

    let name = null

    try {
        const user = retrieveUser(window.sessionUserId)

        name = user.name
    } catch (error) {
        alert(error.message)
    }

    let posts = null

    try {
        posts = retrievePosts(window.sessionUserId)
    } catch (error) {
        alert(error.message)
    }

    function handleLogoutClick() {
        window.sessionUserId = null

        props.onLogout()
    }

    function handleNewPostClick() {
        setView('new-post')
    }

    function handleNewPostCancelClick() {
        setView(null)
    }

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-input')
        const imageDescriptionInput = event.target.querySelector('#image-description-input')
        const textInput = event.target.querySelector('#text-input')

        const image = imageInput.value
        const imageDescription = imageDescriptionInput.value
        const text = textInput.value

        try {
            createNewPost(window.sessionUserId, image, imageDescription, text)

            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }

    function handlePostLikeClick(postId) {
        try {
            toggleLikePost(window.sessionUserId, postId)

            if (view === 'saved') {
                const saved = retrieveSavedPosts(window.sessionUserId)

                setSaved(saved)

                return
            }

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    function handlePostDeleteClick(postId) {
        try {
            deletePost(sessionUserId, postId)

            if (view === 'saved') {
                const saved = retrieveSavedPosts(window.sessionUserId)

                setSaved(saved)

                return
            }

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    function handlePostSaveClick(postId) {
        try {
            toggleSavePost(window.sessionUserId, postId)

            if (view === 'saved') {
                const saved = retrieveSavedPosts(window.sessionUserId)

                setSaved(saved)

                return
            }

            setTimestamp(Date.now())
        } catch (error) {
            alert(error.message)
        }
    }

    function handleSavedClick(event) {
        event.preventDefault()

        try {
            const saved = retrieveSavedPosts(window.sessionUserId)

            setSaved(saved)
            setView('saved')
        } catch (error) {
            alert(error.message)
        }
    }

    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
    }

    return <div>
        <Header
            onHomeClick={handleHomeClick}
            onNewPostClick={handleNewPostClick}
            onSavedClick={handleSavedClick}
            onLogoutClick={handleLogoutClick}
            userName={name}
        />

        {view === 'new-post' ?
            <NewPostForm onSubmit={handleNewPostSubmit} onCancelClick={handleNewPostCancelClick} />
            : null}

        {(view === null || view === 'new-post') && posts !== null ? <div aria-label="Posts list" className="view">
            {posts.map(function (post) {
                // Función para manejar el clic en "Me gusta"
                function handleBeforePostLikeClick() {
                    handlePostLikeClick(post.id);
                }

                // Función para manejar el clic en "Eliminar"
                function handleBeforePostDeleteClick() {
                    const confirmed = window.confirm('Are you sure you want to delete the post?');

                    if (confirmed)
                        handlePostDeleteClick(post.id);
                }

                // Función para manejar el clic en "Guardar"
                function handleBeforePostSaveClick() {
                    handlePostSaveClick(post.id);
                }

                return (
                    <Post
                        key={post.id}
                        post={post}
                        onLikeClick={handleBeforePostLikeClick}
                        onDeleteClick={handleBeforePostDeleteClick}
                        onSaveClick={handleBeforePostSaveClick}
                        sessionUserId={window.sessionUserId}
                    />
                );
            })}
        </div> : null}

        {view === 'saved' && saved !== null ? (
            <SavedPosts
                savedPosts={saved}
                onLikeClick={handlePostLikeClick}
                onDeleteClick={handlePostDeleteClick}
                onSaveClick={handlePostSaveClick}
                sessionUserId={window.sessionUserId}
            />
        ) : null}
    </div>
}

export default Home