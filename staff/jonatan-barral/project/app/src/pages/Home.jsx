import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import logic from '../logic'

import { Button, Link, Container } from '../library'

import AdminHome from './AdminHome'
import SecretaryHome from './SecretaryHome'
import JudgeHome from './JudgeHome'

import { UpdateUserPasswordStarting } from '../components'

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

    if (logic.isUserStarting()) {
        return <UpdateUserPasswordStarting onChangePassword={props.onLogout} onError={props.onError} />

    } else if (logic.isUserActivated()) {
        if (logic.isUserAdmin()) {
            return <AdminHome onLogout={props.onLogout} onError={props.onError} onRegisterClick={props.onRegisterClick} />
        } else if (logic.isUserSecretaria()) {
            return <SecretaryHome onLogout={props.onLogout} onError={props.onError} />
        } else if (logic.isUserJuez()) {
            return <JudgeHome onLogout={props.onLogout} onError={props.onError} />
        } else if (logic.isUserJuezC()) {
            return <JudgeHome onLogout={props.onLogout} onError={props.onError} />
        }
    } else if (logic.isUserDeactivated()) {
        navigate('/')
    }


    return <Container align="center">
        <header className="flex justify-between items-center md:min-w-[500px] lg:min-w-[768px]" aria-label="Header">

            <h1>HHola {name}</h1>
            Tu usuario está desactivado, ponte en contacto con la administración para solucionarlo.
            <Button onClick={handleLogoutClick}>Logout</Button>
        </header>

        <Routes>
        </Routes>

        <div className="h-[2rem]"></div>

    </Container>
}