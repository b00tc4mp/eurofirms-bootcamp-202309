import React from 'react'
import AdminLogo from './AdminLogo'
import { Container, Button } from '../library'
import logic from '../logic'

function AdminHeader(props) {

    function handleLogoutClick() {
        props.onLogout()

        logic.logoutUser()
    }

    return (
        <Container align="center">
        <div className="flex justify-between items-center md:min-w-[500px] lg:min-w-[768px]" aria-label="Header">

                <AdminLogo />
            
            <Button onClick={props.onNewProductClick}>
                Create New Product
            </Button>

            <Button onClick={handleLogoutClick}>
                Logout
            </Button>
        </div>
        </Container>
    )
}

export default AdminHeader