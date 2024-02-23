import React from 'react'
import Logo from './Logo'
import { Link, Container } from '../library'
import { useNavigate } from 'react-router-dom'
import logic from '../logic'

function header() {

    const navigate = useNavigate()

    function handleHomeClick(event) {
        event.preventDefault()

        navigate('/')
    }

    function handleRegisterClick(event) {
        event.preventDefault()

        if (logic.isUserLoggedIn()) {
            navigate('/')
        } else {
            navigate('/register')
        }
    }

    function handleLoginClick(event) {
        event.preventDefault()

        if (logic.isUserLoggedIn()) {
            navigate('/')
        } else {
            navigate('/login')
        }
    }

    function handleCartClick() {
        if (logic.isUserLoggedIn()) {
            navigate('/cart')
        } else {
            navigate('/login')
        }
    }
    return (
        <Container align="center">
        <div className="flex justify-between items-center md:min-w-[500px] lg:min-w-[768px]" aria-label="Header">
            <Link onClick={handleHomeClick}>
                <Logo />
            </Link>
            <Link onClick={handleRegisterClick}>
                Register
            </Link>
            <Link onClick={handleLoginClick}>
                Login
            </Link>
            <Link onClick={handleCartClick}>
                Cart 🚚
            </Link>
        </div>
        </Container>
    )
}




export default header