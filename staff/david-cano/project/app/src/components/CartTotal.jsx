import React from 'react';
import { useCartContext } from './CartContext';

export default function CartTotal(props) {
    // const [cartTotal, setCartTotal] = useState(0);

    const products = useCartContext()

    // useEffect(() => {
    //     refreshCartTotal();
    // }, [refreshCartTotal]);

    // function refreshCartTotal() {
    //     try {
    //         logic.retrieveCartItems((error, products) => {
    //             if (error) {
    //                 props.onError(error);
    //                 return;
    //             }

    //             const total = calculateTotal(products);
    //             setCartTotal(total);
    //         });
    //     } catch (error) {
    //         props.onError(error);
    //     }
    // }

    // function calculateTotal(products) {
    //     // Suma los precios de todos los productos en el carrito
    //     return products.reduce((total, product) => total + parseFloat(product.price), 0);
    // }

    const totalProducts = products.reduce((total, product) => total + parseFloat(product.price), 0);

    return (
        <div>
            <h3>
                Total del carrito: {totalProducts.toFixed(2)} €
            </h3>
        </div>
    );
}