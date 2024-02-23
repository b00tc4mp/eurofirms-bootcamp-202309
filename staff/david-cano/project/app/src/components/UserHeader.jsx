import React from 'react'
import Logo from './Logo'
import { Link, Container, Button } from '../library'
import { useNavigate } from 'react-router-dom'
import logic from '../logic'

function UserHeader(props) {

    const navigate = useNavigate()

    function handleHomeClick(event) {
        event.preventDefault()

        navigate('/')
    }

    function handleLogoutClick() {
        props.onLogout()

        logic.logoutUser()
    }

    return (
        <Container align="center">
        <div className="flex justify-between items-center md:min-w-[500px] lg:min-w-[768px]" aria-label="Header">

            <Link onClick={handleHomeClick}>
                <Logo />
            </Link>

            <Button onClick={handleLogoutClick}>
                Logout
            </Button>

        </div>
        </Container>
    )
}




export default UserHeader