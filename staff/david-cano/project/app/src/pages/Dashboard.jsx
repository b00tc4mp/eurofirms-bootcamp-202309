import React from 'react'
import { AllProducts, AdminHeader, Footer } from '../components'
import { Container } from '../library'

const Dashboard = (props) => {
    return (
        <Container align="center">
        <AdminHeader onLogout={props.onLogout} />
        <AllProducts onError={props.onError}/>
        <Footer />
    </Container>
    )
}

export default Dashboard