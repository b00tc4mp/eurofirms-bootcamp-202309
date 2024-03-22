import React, { useState, useEffect} from 'react'
import Logo from './Logo'
import { Link, Container, Button } from '../library'
import { useNavigate } from 'react-router-dom'
import logic from '../logic'

function UserHeader(props) {
    const [user, setUser] = useState(null)
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
    }, [])

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
        <div className="flex justify-between items-center md:min-w-[500px] lg:min-w-[768px] bg-[#ededaa] rounded-3xl" aria-label="Header">

            <Link onClick={handleHomeClick}>
                <Logo />
            </Link>

            <h2> Wellcome! {user && (
                    <span>{user.name}</span>
                )}</h2>

            <Button onClick={handleLogoutClick}>
                Logout
            </Button>

        </div>
        </Container>
    )
}

export default UserHeader