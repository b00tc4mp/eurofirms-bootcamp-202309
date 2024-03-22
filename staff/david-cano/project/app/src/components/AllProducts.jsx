import { useState, useEffect } from 'react'

import Products from './Products'

import logic from '../logic'
import context from '../logic/context'

export default function AllProducts(props) {
    console.log('AllProducts')

    const [products, setProducts] = useState([])

    const { jwt } = context

    const token = jwt?.token

    useEffect(() => {
        if (token)
            refreshProductsForUser()
        else
            refreshProducts()
    }, [props.timestamp, token])

    function refreshProducts() {
        try {
            logic.retrieveProducts((error, products) => {
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

    function refreshProductsForUser() {
        try {
            logic.retrieveProductsForUser((error, products) => {
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

    function handleCartItemAdd() {
        refreshProductsForUser()
    }

    function handleProductDeleted() {
        refreshProducts()
    }

    return (
        <Products products={products} onCartItemAdd={handleCartItemAdd} onProductDeleted={handleProductDeleted} onError={props.onError} />


    )
}