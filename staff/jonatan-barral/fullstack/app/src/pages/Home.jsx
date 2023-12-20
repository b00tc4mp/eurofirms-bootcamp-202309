import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import { logoutUser, retrieveUser } from '../logic'

import { Button, Container, Link } from '../library'

import { AllPosts, MyPosts, NewPost, SavedPosts, Logo } from '../components'

function Home(props) {

    const [name, setName] = useState(null)
    const [timestamp, setTimestamp] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {

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
        navigate('/new-post')
    }

    function handleNewPostCancelClick() {
        navigate('/')
    }

    function handleNewPostSubmit() {
        navigate('/')
        setTimestamp(Date.now())
    }

    function handleSavedClick(event) {
        event.preventDefault()

        navigate('/saved')
    }

    function handleHomeClick(event) {
        event.preventDefault()

        navigate('/')
    }

    function handleMyPostsClick(event) {
        event.preventDefault()

        navigate('/my-posts')
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

        <Routes>
            <Route path="/new-post" element={<>
                <NewPost onNewPostSubmit={handleNewPostSubmit} onNewPostCancelClick={handleNewPostCancelClick} onError={props.onError} />
                <AllPosts timestamp={timestamp} onError={props.onError} />
            </>} />

            <Route path="/" element={<AllPosts timestamp={timestamp} onError={props.onError} />} />

            <Route path="/saved" element={<SavedPosts onError={props.onError} />} />

            <Route path='/my-posts' element={<MyPosts onError={props.onError} />} />
        </Routes>

        <div className="h-[2rem]"></div>

        <footer className="bg-white fixed bottom-0 w-full flex justify-center items-center h-[2rem] lg:hidden">
            <Link onClick={handleHomeClick}><Logo /></Link>
            <Button title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>+</Button>
        </footer>
    </Container>
}

export default Home