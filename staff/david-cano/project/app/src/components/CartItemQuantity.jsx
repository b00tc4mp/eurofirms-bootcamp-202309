import React from 'react'

function CartItemQuantity({ quantity, setQuantity }) {
    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className='p-[10px]'>
            <span>Quantity : </span>
            <button onClick={decrementQuantity}>➖</button>
            <span>{quantity}</span>
            <button onClick={incrementQuantity}>➕</button>
        </div>
    )
}

export default CartItemQuantity