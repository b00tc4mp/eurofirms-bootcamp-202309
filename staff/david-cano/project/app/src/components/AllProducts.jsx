import { useState, useEffect } from 'react'

import Products from './products'

import logic from '../logic'

export default function AllProducts(props) {
    console.log('AllProducts')

    const [products, setProducts] = useState([])

    useEffect(() => {
        refreshProducts()
    }, [])

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

    function handleProductDeleted() {
        refreshProducts()
    }

    return <Products products={products}  onProductDeleted={handleProductDeleted} onError={props.onError} />
}