import Products from './Products'
import { useCartContext } from './CartContext'

export default function cartItems(props) {
    console.log('Cart Items')

    const products = useCartContext()

    return <Products products={products} onCartItemAdd={props.onCartItemAdd} onError={props.onError} />
}
