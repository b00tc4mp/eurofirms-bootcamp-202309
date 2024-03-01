import React from 'react'
import AdminLogo from './AdminLogo'
import { Link, Container, Button } from '../library'
import { useNavigate } from 'react-router-dom'
import logic from '../logic'

function AdminHeader(props) {

    const navigate = useNavigate()

    function handleLogoutClick() {
        props.onLogout()

        logic.logoutUser()
    }

    function handleNewProductClick() {

        navigate('/new-product')
        // props.onCreateNewProduct()

        //logic.createNewProduct()
    }

    return (
        <Container align="center">
        <div className="flex justify-between items-center md:min-w-[500px] lg:min-w-[768px]" aria-label="Header">

                <AdminLogo />
            
            <Button onClick={handleNewProductClick}>
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