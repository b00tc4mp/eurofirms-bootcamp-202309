import React from 'react'
import Logo from './Logo'
import { Link, Container } from '../library'
import { useNavigate } from 'react-router-dom'
import logic from '../logic'
import { useState } from 'react'
import { useEffect } from 'react'

function header() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()

    useEffect(() => {
        const isLoggedIn = logic.isUserLoggedIn(); 
        if (isLoggedIn) {
            logic.retrieveUser((error, user) => { 
                if (error) {
                    console.error(error);
                    return;
                }
                setUser(user);
            });
        }
    }, []);

    function handleHomeClick(event) {
        event.preventDefault()

        navigate('/')
    }

    function handleRegisterClick(event) {
        event.preventDefault()

        if (!user) {
            navigate('/register')
        }
    }

    function handleLoginClick(event) {
        event.preventDefault()

        if (!user) {
            navigate('/login')
        }
    }

    function handleCartClick() {
        if (user && user.role === 'regular') {
            navigate('/cart')
        } else if (user && user.role === 'admin') {
            navigate('/dashboard')
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
                {!user && (
                    <>
                        <Link onClick={handleRegisterClick}>
                            Register
                        </Link>
                        <Link onClick={handleLoginClick}>
                            Login
                        </Link>
                    </>
                )}

                {user && (
                    <span>{user.name}</span>
                )}

                <Link onClick={handleCartClick}>
                    <h1>
                        <img width='150px' height='150px' src="https://img.freepik.com/vector-premium/icono-cesta-compras-comercio-electronico-vector-color-sencillo_1178600-658.jpg?w=740" alt="https://img.freepik.com/vector-premium/icono-cesta-compras-comercio-electronico-vector-color-sencillo_1178600-658.jpg?w=740" />
                    </h1>
                </Link>
            </div>
        </Container>
    )
}
export default header