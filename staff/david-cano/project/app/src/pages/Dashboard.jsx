import React from 'react'
import { AllProducts, AdminHeader, Footer, CreateNewProduct } from '../components'
import { Container } from '../library'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Dashboard = (props) => {
    console.log('Dashboard')

    const [timestamp, setTimestamp] = useState(null)
    const navigate = useNavigate()

    function handleNewProductSubmit() {
        // Navegamos a la ruta '/' utilizando la función 'navigate'
        navigate('/dashboard')
        // Actualizamos el estado 'timestamp' con la marca de tiempo actual
        setTimestamp(Date.now())
    }

    function handleNewProductCancelClick() {
        // Navegamos a la ruta '/' utilizando la función 'navigate'
        navigate('/dashboard')
    }


    return (
        <Container align="center">
            <AdminHeader onLogout={props.onLogout} />

            <Routes>
                <Route path="/new-product" element={<>
                    <CreateNewProduct onNewProductSubmit={handleNewProductSubmit} onNewProductCancelClick={handleNewProductCancelClick} onError={props.onError} />
                    <AllProducts timestamp={timestamp} onError={props.onError} />
                </>} /> 
                </Routes>

            <AllProducts timestamp={timestamp} onError={props.onError} />
            

            <Footer />
        </Container>
    )
}

export default Dashboard