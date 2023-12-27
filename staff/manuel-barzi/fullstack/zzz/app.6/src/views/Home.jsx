import { useEffect, useState } from 'react'

import logoutUser from '../logic/logoutUser'
import retrieveUser from '../logic/retrieveUser'

import AllPosts from '../components/AllPosts'
import Button from '../components/Button'
import Container from '../components/Container'
import Link from '../components/Link'
import MyPosts from '../components/MyPosts'
import NewPost from '../components/NewPost'
import SavedPosts from '../components/SavedPosts'

import Logo from '../components/Logo'

function Home(props) {
    console.log('Home')

    const [view, setView] = useState(null)
    const [name, setName] = useState(null)
    const [timestamp, setTimestamp] = useState(null)

    useEffect(() => {
        console.log('Home useEffect')

        try {
            retrieveUser((error, user) => {
                if (error) {
                    props.onError(error)

                    return
                }

                setName(user.name)
            })
        } catch (error) {
            props.onError(error)
        }
    }, [])

    function handleLogoutClick() {
        logoutUser()

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
        props.onSuccess()
    }

    function handleSavedClick(event) {
        event.preventDefault()

        setView('saved')
        props.onSuccess()
    }

    function handleHomeClick(event) {
        event.preventDefault()

        setView(null)
        props.onSuccess()
    }

    function handleMyPostsClick(event) {
        event.preventDefault()

        setView('my-posts')
        props.onSuccess()
    }

    return <Container align="center">
        <header className="flex justify-between items-center md:min-w-[500px] lg:min-w-[768px]" aria-label="Header">
            <Link className="hidden lg:block" onClick={handleHomeClick}><Logo /></Link>

            <Button className="hidden lg:block" title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>+</Button>

            <Link onClick={handleSavedClick}>Saved</Link>

            <Link onClick={handleMyPostsClick}>My posts</Link>

            <span aria-label="User name">{name}</span>

            <Button onClick={handleLogoutClick}>Logout</Button>
        </header>

        {view === 'new-post' ? <NewPost onNewPostSubmit={handleNewPostSubmit} onNewPostCancelClick={handleNewPostCancelClick} onSuccess={props.onSuccess} onError={props.onError} /> : null}

        {view === null || view === 'new-post' ? <AllPosts timestamp={timestamp} onSuccess={props.onSuccess} onError={props.onError} /> : null}

        {view === 'saved' ? <SavedPosts onSuccess={props.onSuccess} onError={props.onError} /> : null}

        {view === 'my-posts' ? <MyPosts onSuccess={props.onSuccess} onError={props.onError} /> : null}

        <div className="h-[2rem]"></div>

        <footer className="bg-white fixed bottom-0 w-full flex justify-center items-center h-[2rem] lg:hidden">
            <Link onClick={handleHomeClick}><Logo /></Link>
            <Button title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>+</Button>
        </footer>
    </Container>
}

export default Home