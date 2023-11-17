import { useState } from 'react'

import retrieveUser from '../logic/retrieveUser'
import retrievePosts from '../logic/retrievePosts'
import createNewPost from '../logic/createNewPost'
import retrieveSavedPosts from '../logic/retrieveSavedPosts'

import Button from '../components/Button'
import Link from '../components/Link'
import Field from '../components/Field'
import Form from '../components/Form'
import Container from '../components/Container'
import Post from '../components/Post'

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

    function handleSetSaved(savedPosts){
        setSaved(savedPosts)
    }

    function handleSetTimeStamp(date){
        setTimestamp(date)
    }

    return <Container>
        <header className="header" aria-label="Header">
            <Link onClick={handleHomeClick}><Logo /></Link>

            <span aria-label="User name">{name}</span>

            <Button title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>+</Button>

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

        {(view === null || view === 'new-post') && posts !== null ? <Container align="center" aria-label="Posts list">
            {posts.map(function (post) {
               return <Post key={post.id} post={post} onSetTimestamp={handleSetTimeStamp} />
            })}
        </Container> : null}

        {view === 'saved' && saved !== null ? <Container align="center" aria-label="Saved list">
            {saved.map(function (post) {
               return <Post key={post.id} post={post} view='saved' onSetSaved={handleSetSaved}/>
            })}
        </Container> : null}
    </Container>
}

export default Home