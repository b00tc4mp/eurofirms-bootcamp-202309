import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import logic from '../logic'

import { Button, Link, Container, FooterTabs } from '../library'



export default function SecretaryHome(props) {
    console.log('Secretaría Home')

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

    function handlejudjesClick(event) {
        event.preventDefault

        navigate('/judjes')
    }
    return <Container align="center">
        <header className="flex justify-between items-center md:min-w-[500px] lg:min-w-[768px]" aria-label="Header">

            <h1>Hello secretaria {name}</h1>
            <Button onClick={handleLogoutClick}>Logout</Button>
        </header>

        <Routes>
            <Route path="/judges" element={<retrieveJudges onError={props.onError} />} />

        </Routes>
        <div className="h-[2rem]"></div>
        <footer className="bg-white fixed bottom-0 w-full flex justify-center items-center h-[2rem] lg:hidden">
            <a href="#" role='tab' className={`tab-link ${activeTab === 1 ? 'active-tab' : ''}`} onClick={handlejudjesClick}>Ver jueces activos</a>

        </footer>

    </Container>
}