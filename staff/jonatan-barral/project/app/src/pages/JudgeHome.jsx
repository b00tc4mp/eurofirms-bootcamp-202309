import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import logic from '../logic'

import { Button, Link, Container } from '../library'



export default function JudgeHome(props) {
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

    return <Container align="center">
        <header className="flex justify-between items-center md:min-w-[500px] lg:min-w-[768px]" aria-label="Header">

            <h1>Hello juez {name}</h1>
            <Button onClick={handleLogoutClick}>Logout</Button>
        </header>

        <Routes>
        </Routes>

        <div className="h-[2rem]"></div>

    </Container>
}