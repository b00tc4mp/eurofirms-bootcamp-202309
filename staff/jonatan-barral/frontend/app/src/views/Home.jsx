import { useState } from 'react'

import retrieveUser from '../logic/retrieveUser'
import retrievePosts from '../logic/retrievePosts'
import retrieveSavedPosts from '../logic/retrieveSavedPosts'
import createNewPost from '../logic/CreateNewPost'

import Link from '../components/Link'
import Button from '../components/Button'
import Field from "../components/Field"
import Form from "../components/Form"
import Container from '../components/CONTAINER.JSX'
import Posts from "../components/Posts"
import SavedPost from "../components/SavedPost"

function Home(props) {

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
        posts = retrievePosts(sessionUserId)
    } catch (error) {
        alert(error.message)
    }

    function handleLogoutClick() {
        sessionUserId = null

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
            createNewPost(sessionUserId, image, imageDescription, text)

            setView(null)
        } catch (error) {
            alert(error.message)
        }
    }

    function refreshPosts() {
        if (view === null || view === 'newPost') {
            setTimestamp(Date.now())
        } else if (view === 'saved') {
            try {
                const saved = retrieveSavedPosts(window.sessionUserId)

                setSaved(saved)
            } catch (error) {
                alert(error.message)
            }
        }
    }

    function handlePostLikeClick() {
        refreshPosts()
    }

    function handlePostDeleteClick() {
        refreshPosts()
    }

    function handlePostSaveClick(postId) {
        refreshPosts()
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

    return <Container>
        <header className="header" aria-label="Header">
            <h1><Link onClick={handleHomeClick}>Home</Link></h1>
            <span aria-label="User name">{name}</span>
            <Button title="New post" aria-label="New post" onClick={handleNewPostClick}>+</Button>
            <Link onClick={handleSavedClick}>Saved</Link>
            <Button onClick={handleLogoutClick}>Logout</Button>
        </header>

        {view === 'new-post' ? <Container align="center">
            <h2>New post</h2>

            <Form onSubmit={handleNewPostSubmit}>
                <Field type="url" id="image-field" required>Image</Field>

                <Field type="text" id="image-description-field" required>Image description</Field>

                <Field type="text" id="text-field" required>Text</Field>

                <Button type="submit">Post</Button>
                <Button onClick={handleNewPostCancelClick}>Cancel</Button>
            </Form>
        </Container> : null}

        {(view === null || view === 'new-post') && posts !== null ? <Posts posts={posts} onLikeClick={handlePostLikeClick} onSaveClick={handlePostSaveClick} onDeleteClick={handlePostDeleteClick} />
            : null}

        {view === 'saved' && saved !== null ? <Posts posts={saved} onLikeClick={handlePostLikeClick} onSaveClick={handlePostSaveClick} onDeleteClick={handlePostDeleteClick} />
            : null}
    </Container>
}

export default Home