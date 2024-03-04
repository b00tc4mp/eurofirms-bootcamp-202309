import { useState, useEffect } from 'react'

import Products from './Products'

import logic from '../logic'

export default function AllProducts(props) {
    console.log('AllProducts')

    const [products, setProducts] = useState([])

    useEffect(() => {
        refreshProducts()
    }, [props.timestamp])

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

    function handleCartItemAdd() {
        refreshProducts()
    }

    function handleProductDeleted() {
        refreshProducts()
    }

    return (
        <Products products={products} onCartItemAdd={handleCartItemAdd} onProductDeleted ={handleProductDeleted} onError={props.onError} />

        
    )
}