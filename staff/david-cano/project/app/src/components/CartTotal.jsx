import React, { useState, useEffect } from 'react';
import logic from '../logic';

export default function CartTotal(props) {
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        refreshCartTotal();
    }, [refreshCartTotal]);

    function refreshCartTotal() {
        try {
            logic.retrieveCartItems((error, products) => {
                if (error) {
                    props.onError(error);
                    return;
                }

                const total = calculateTotal(products);
                setCartTotal(total);
            });
        } catch (error) {
            props.onError(error);
        }
    }

    function calculateTotal(products) {
        // Suma los precios de todos los productos en el carrito
        return products.reduce((total, product) => total + parseFloat(product.price), 0);
    }

    return (
        <div>
            <h2>
                Total del carrito: {cartTotal.toFixed(2)} €
            </h2>
        </div>
    );
}