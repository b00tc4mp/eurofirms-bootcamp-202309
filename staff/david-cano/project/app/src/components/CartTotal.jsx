import React from 'react';
import { useCartContext } from './CartContext';

export default function CartTotal() {

    const cartItems = useCartContext()

    const totalProducts = cartItems.reduce((total, product) => total + parseFloat(product.price), 0);

    return (
        <div>
            <h3>
                Total del carrito: {totalProducts.toFixed(2)} €
            </h3>
        </div>
    );
}