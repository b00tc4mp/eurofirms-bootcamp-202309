import { useState, useEffect } from 'react'

import retrieveUser from '../logic/retrieveUser'

import Button from '../components/Button'
import Link from '../components/Link'
import Container from '../components/Container'
import MyPosts from '../components/MyPosts'
import SavedPosts from '../components/SavedPosts'
import AllPosts from '../components/AllPosts'
import NewPost from '../components/NewPost'
import UserProfile from '../components/UserProfile'

import Logo from '../components/Logo'

function Home(props) {
    console.log('Home useEffect')

    const [view, setView] = useState(null)
    const [name, setName] = useState(null)
    const [timestamp, setTimestamp] = useState(null)

    useEffect(() => {
        try {
            retrieveUser(window.sessionUserId, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setName(user.name)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

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

    function handleNewPostSubmit() {
        setView(null)
        setTimestamp(Date.now())
    }

    function handleSavedClick(event) {
        event.preventDefault()

        setView('saved')
    }

    function handleUserClick(event) {
        event.preventDefault()

        setView('user-profile')
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
            <Link onClick={handleHomeClick}><Logo /></Link>

            <Link onClick={handleUserClick} aria-label="User name">{name}</Link>

            <Button title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>+</Button>

            <Link onClick={handleSavedClick}>Saved</Link>

            <Link onClick={handleMyPostsClick}>My posts</Link>

            <Button onClick={handleLogoutClick}>Logout</Button>
        </header>

        {view === 'new-post' && <NewPost onNewPostSubmit={handleNewPostSubmit} onNewPostCancelClick={handleNewPostCancelClick} />}

        {(view === null || view === 'new-post') && <AllPosts timestamp={timestamp} />}

        {view === 'user-profile' && <UserProfile />}

        {view === 'saved' && <SavedPosts timestamp={timestamp} />}

        {view === 'my-posts' && <MyPosts />}
    </Container>
}

export default Home