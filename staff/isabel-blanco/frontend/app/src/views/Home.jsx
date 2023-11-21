import { useState } from "react"

import retrieveUser from "../logic/retrieveUser"

import Button from "../components/Button"
import Link from "../components/Link"
import Container from "../components/Container"
import MyPosts from "../components/MyPosts"
import NewPost from "../components/NewPosts"
import AllPosts from "../components/AllPost"
import SavedPosts from "../components/SavedPosts"

import Logo from "../components/Logo"

function Home(props) {
    console.log('Home')

    const [view, setView] = useState(null)

    let name = null

    try {
        const user = retrieveUser(window.sessionUserId)

        name = user.name
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

        setView('saved')
    }

    function handleSavedClick(event) {
        event.preventDefault()

        setView('saved')
    }

    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
    }

    function handleMyPostsClick(event) {
        event.preventDefault()

        setView('my-posts')
    }

    return <Container>
        <header className="header" aria-label="Header">
            <h1><Link onClick={handleHomeClick}>Home</Link></h1>

            <span aria-label="User name">{name}</span>

            <Button title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>+</Button>

            <Link onClick={handleSavedClick}>Saved</Link>

            <Link onClick={handleMyPostsClick}>My posts</Link>

            <Button onClick={handleLogoutClick}>Logout</Button>
        </header>

        {view === 'new-post' ? <NewPost onNewPostSubmit={handleNewPostSubmit} onNewPostCancelClick={handleNewPostCancelClick} /> : null}

        {view === null || view === 'new-posts' ? <AllPosts /> : null}

        {view === 'saved' ? <SavedPosts /> : null}

        {view === 'my-post' ? <MyPosts /> : null}

    </Container>
}

export default Home