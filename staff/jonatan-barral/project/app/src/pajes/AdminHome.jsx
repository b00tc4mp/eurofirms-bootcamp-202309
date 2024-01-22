import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import logic from '../logic'

import { Button, Link, Container, } from '../library'

import { RegisterUser } from '../components'

export default function AdminHome(props) {
    console.log('Home')

    const [activeTab, setActiveTab] = useState(1)

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex)
    }

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


    function handleRegisterUserClick() {
        navigate('/register-user')
    }

    function handleRegisterUserCancelClick() {
        navigate('/')
    }

    function handleRegisterUserSubmit() {
        navigate('/')
    }

    function handleJudjesClick(event) {
        event.preventDefault

        navigate('/judjes')
    }

    function handleSecretariesClick(event) {
        event.preventDefault

        navigate('/secretaries')
    }

    return <Container align="center">
        <header className="flex justify-between items-center md:min-w-[500px] lg:min-w-[768px]" aria-label="Header">

            <h1>Hello administrador {name}</h1>
            <Button onClick={handleLogoutClick}>Logout</Button>

        </header>

        <Routes>
            <Route path="/register-user" element={<>
                <RegisterUser onRegisterUserSubmit={handleRegisterUserSubmit} onRegisterUserCancelClick={handleRegisterUserCancelClick} onError={props.onError} />
            </>} />

        </Routes>

        <div className="h-[2rem]"></div>
        <footer className="bg-white fixed bottom-0 w-full flex justify-center items-center h-[2rem] lg:hidden">

            <a href="#" role='tab' className={`tab-link ${activeTab === 1 ? 'active-tab' : ''}`} onClick={handleJudjesClick}>Ver jueces</a>
            <a href="#" role='tab' className={`tab-link ${activeTab === 1 ? 'active-tab' : ''}`} onClick={handleSecretariesClick}>Ver secretarías</a>

            <button title="Registrar Usuario" role="tab" className={`tab-link ${activeTab === 1 ? 'active-tab' : ''}`} aria-label="Registrar usuario" onClick={handleRegisterUserClick}> 🔏</button>
        </footer>

    </Container>
}