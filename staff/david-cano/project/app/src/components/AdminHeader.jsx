import React from 'react'
import Logo from './Logo'
import { Link, Container, Button } from '../library'
import { useNavigate } from 'react-router-dom'
import logic from '../logic'

function AdminHeader(props) {

    const navigate = useNavigate()

    function handleLogoutClick() {
        props.onLogout()

        logic.logoutUser()
    }

    function handleHomeClick(event) {
        event.preventDefault()

        navigate('/')
    }

    function handleNewProductClick(event) {
        event.preventDefault()

        if (logic.isUserLoggedIn()) {
            navigate('/')
        } else {
            navigate('/register')
        }
    }

    return (
        <Container align="center">
        <div className="flex justify-between items-center md:min-w-[500px] lg:min-w-[768px]" aria-label="Header">
            <Link onClick={handleHomeClick}>
                <Logo />
            </Link>
            <Link onClick={handleNewProductClick}>
                Create New Product
            </Link>
            <Button onClick={handleLogoutClick}>
                Logout
            </Button>
        </div>
        </Container>
    )
}




export default AdminHeader