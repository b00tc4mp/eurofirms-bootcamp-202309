import React from 'react'
import { CartItems, UserHeader, Footer, CartTotal } from '../components'
import { Container } from '../library'
import { useCartContext } from '../components/CartContext'

const Cart = (props) => {

    const products = useCartContext()

    return (
        <Container align="center">
            <UserHeader onLogout={props.onLogout} />

            {products.length > 0 ? (
                <>
                    <CartItems onCartItemAdd={props.onCartItemAdd} onError={props.onError} />
                    <CartTotal onError={props.onError} />
                </>
            ) : (
                <>
                    <h2>¡¡¡ Your Cart is EMPTY !!!</h2>
                    <h2>Please, GO TO THE SHOOPING</h2>
                </>
            )}

            <Footer />
        </Container>
    )
}

export default Cart
