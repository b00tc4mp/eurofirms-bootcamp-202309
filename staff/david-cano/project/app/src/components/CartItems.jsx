import { useState, useEffect } from 'react'

import logic from '../logic'

import Products from './Products'
import { useCartContext } from './CartContext'


export default function cartItems(props) {
    console.log('Cart Items')

    const products = useCartContext()

    // const [products, setProducts] = useState([])

    // useEffect(() => {
    //     refreshProducts()
    // }, [])

    // function refreshProducts() {
    //     try {
    //         logic.retrieveCartItems( (error, products) => {
    //             if (error) {
    //                 props.onError(error)

    //                 return
    //             }

    //             setProducts(products)
    //         })
    //     } catch (error) {
    //         props.onError(error)
    //     }
    // }

    // function handleProductDeleted() {
    //     refreshProducts()
    // }

    // function handleCartItemAdd() {
    //     refreshProducts()
    // }

    return <Products products={products} onCartItemAdd={props.onCartItemAdd} onError={props.onError} />
}
