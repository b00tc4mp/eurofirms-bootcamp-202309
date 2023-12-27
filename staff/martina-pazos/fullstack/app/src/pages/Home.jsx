import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import logic from '../logic'

import { Button, Link, Container } from '../library'

import { AllPosts, MyPosts, NewPost, SavedPosts, Profile } from '../components'


export default function Home(props) {
    console.log('Home')

    const [name, setName] = useState(null)
    const [timestamp, setTimestamp] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        console.log('Home useEffect')

        try {
            logic.retrieveUser((error, user) => {
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
        logic.logoutUser()

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
        event.preventDeoult()

        navigate('/')
    }

    function handleMyPostsClick(event) {
        event.preventDefault()

        navigate('/my-posts')
    }

    function handleProfileClick(event) {
        event.preventDefault()

        navigate('/profile')
    }

    return <Container align='center'>
        <header className='flex justify-between items-center md:min-w-[500px]lg:min-w-[768px]' aria label='Header'>


            <Button className='hidden lg:block' title='New poSt' aria-label='New post (+)' onClick={handleNewPostClick}>+</Button>

            <Link onClick={handleSavedClick}>Saved</Link>

            <Link onClick={handleMyPostsClick}>My posts</Link>

            <Link onClick={handleProfileClick} aria label='User name'>{name}</Link>

            <Button onClick={handleLogoutClick}>Logout</Button>
        </header>

        <Routes>
            <Route path="/new-post" element={<>
                <NewPost onNewPostSubmit={handleNewPostSubmit} onNewPostCancelClick={handleNewPostCancelClick} onError={props.onError} />
                <AllPosts timestamp={timestamp} onError={props.onError} />
            </>} />

            <Route path="/" element={<AllPosts timestamp={timestamp} onError={props.onError} />} />

            <Route path="/saved" element={<SavedPosts onError={props.onError} />} />

            <Route path="/my-posts" element={<MyPosts onError={props.onError} />} />

            <Route path="/profile/*" element={<Profile />} />
        </Routes>

        <div className="h-[2rem]"></div>

        <footer className="bg-white fixed bottom-0 w-full flex justify-center items-center h-[2rem] lg:hidden">
            <Link onClick={handleHomeClick}><Logo /></Link>
            <Button title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>+</Button>
        </footer>
    </Container>
}

