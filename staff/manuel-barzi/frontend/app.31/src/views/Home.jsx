import { useState } from 'react'

import retrieveUser from '../logic/retrieveUser'
import retrievePosts from '../logic/retrievePosts'
import createNewPost from '../logic/createNewPost'
import toggleLikePost from '../logic/toggleLikePost'
import toggleSavePost from '../logic/toggleSavePost'
import retrieveSavedPosts from '../logic/retrieveSavedPosts'
import deletePost from '../logic/deletePost'

import Button from '../components/Button'
import Link from '../components/Link'
import Field from '../components/Field'
import Form from '../components/Form'

import Logo from '../components/Logo'

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

        const imageInput = event.target.querySelector('#image-field')
        const imageDescriptionInput = event.target.querySelector('#image-description-field')
        const textInput = event.target.querySelector('#text-field')

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
        <header className="header" aria-label="Header">
            <Link onClick={handleHomeClick}><Logo /></Link>

            <span aria-label="User name">{name}</span>

            <Button title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>+</Button>

            <Link onClick={handleSavedClick}>Saved</Link>

            <Button onClick={handleLogoutClick}>Logout</Button>
        </header>

        {view === 'new-post' ? <div className="view">
            <h2>New post</h2>

            <Form onSubmit={handleNewPostSubmit}>
                <Field type="url" id="image-field" required>Image</Field>

                <Field type="text" id="image-description-field" required>Image description</Field>

                <Field type="text" id="text-field" required>Text</Field>

                <Button type="submit">Post</Button>
                <Button onClick={handleNewPostCancelClick}>Cancel</Button>
            </Form>
        </div> : null}

        {(view === null || view === 'new-post') && posts !== null ? <div aria-label="Posts list" className="view">
            {posts.map(function (post) {
                function handleBeforePostLikeClick() {
                    handlePostLikeClick(post.id)
                }

                function handleBeforePostDeleteClick() {
                    const confirmed = confirm('Delete post?')

                    if (confirmed)
                        handlePostDeleteClick(post.id)
                }

                function handleBeforePostSaveClick() {
                    handlePostSaveClick(post.id)
                }

                return <article key={post.id} className="post">
                    <h3>{post.author.name}</h3>

                    <img className="post-image"
                        src={post.image}
                        alt={post.imageDescription}
                        title={post.imageDescription} />

                    <p>{post.text}</p>

                    <Button onClick={handleBeforePostLikeClick}>{(post.liked ? '❤️' : '🩶') + ' ' + post.likes.length + ' likes'}</Button>

                    <Button onClick={handleBeforePostSaveClick}>{(post.saved ? '⭐️' : '✩')}</Button>

                    {post.author.id === sessionUserId ? <Button onClick={handleBeforePostDeleteClick}>Delete</Button> : null}
                </article>
            })}
        </div> : null}

        {view === 'saved' && saved !== null ? <div aria-label="Saved list" className="view">
            {saved.map(function (post) {
                function handleBeforePostLikeClick() {
                    handlePostLikeClick(post.id)
                }

                function handleBeforePostDeleteClick() {
                    const confirmed = confirm('Delete post?')

                    if (confirmed)
                        handlePostDeleteClick(post.id)
                }

                function handleBeforePostSaveClick() {
                    handlePostSaveClick(post.id)
                }

                return <article key={post.id} className="post">
                    <h3>{post.author.name}</h3>

                    <img className="post-image"
                        src={post.image}
                        alt={post.imageDescription}
                        title={post.imageDescription} />

                    <p>{post.text}</p>

                    <Button onClick={handleBeforePostLikeClick}>{(post.liked ? '❤️' : '🩶') + ' ' + post.likes.length + ' likes'}</Button>

                    <Button onClick={handleBeforePostSaveClick}>{(post.saved ? '⭐️' : '✩')}</Button>

                    {post.author.id === sessionUserId ? <Button onClick={handleBeforePostDeleteClick}>Delete</Button> : null}
                </article>
            })}
        </div> : null}
    </div>
}

export default Home