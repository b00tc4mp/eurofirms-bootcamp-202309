import React from 'react'
'react-router-dom'
import { CartItems, UserHeader, Footer } from '../components'
import { Container } from '../library'

const Cart = (props) => {
    return (
        <Container align="center">
        <UserHeader onLogout={props.onLogout} />
        
    <CartItems onError={props.onError} />
        
        <Footer />
        </Container>
    )
}

export default Cart
