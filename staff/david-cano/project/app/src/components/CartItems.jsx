import { useState, useEffect } from 'react'

import logic from '../logic'

import Products from './Products'


export default function cartItems(props) {
    console.log('Cart Items')

    const [products, setProducts] = useState([])

    useEffect(() => {
        refreshProducts()
    }, [])

    function refreshProducts() {
        try {
            logic.retrieveCartItems( (error, products) => {
                if (error) {
                    props.onError(error)

                    return
                }

                setProducts(products)
            })
        } catch (error) {
            props.onError(error)
        }
    }

    function handleProductDeleted() {
        refreshProducts()
    }

    return <Products products={products} onProductDeleted={handleProductDeleted} onError={props.onError} />
}
