import React from 'react'
import { Routes, Route, } from 'react-router-dom'
import { CartItems, Header, Footer } from '../components'
const Cart = (props) => {
    return (
        <>
        <Header />
        <Routes>
                <Route path="/cart" element={<CartItems onError={props.onError} />} />
        </Routes>
        <Footer />
        </>
    )
}

export default Cart
