import Button from '../library/Button'

import logic from '../logic'
//import isUserLoggedIn from '../logic/isUserLoggedIn'

export default function Product(props) {
    console.log('Product')

    const product = props.product
    // const productUser = logic.retrieveProductsForUser
    // const productForUser = productUser.find(productUser => productUser.id === product.id);


    function handleAddCart() {
        console.log('Product Add Cart')

        try {
            logic.addCartItem(product.id, error => {
                if (error) {
                    props.onError(error)

                    return
                }
                props.onCartAdd()
            })
        } catch (error) {
            props.onError(error)
        }
    }

    function handleDeleteClick() {
        const confirmed = confirm('Are you sure do you want to delete the product?')

        if (confirmed)
            try {
                logic.deleteProduct(product.id, error => {
                    if (error) {
                        props.onError(error)

                        return
                    }

                    props.onDeleted()
                })
            } catch (error) {
                props.onError(error)
            }
    }

    // const isInCart = productForUser.cartItem === true && productForUser.id === product.id && product.cartItem
    const isInCart = product.cartItem

    console.log(product)

    return <article className="flex flex-col p-[.5rem] hover:bg-[skyblue]">
        <p>{product.name}</p>
        <img className="max-w-[300px]" src={product.img} />
        <p>{product.description}</p>
        <p>{product.price} €</p>

        {/* <span></span> */}
        <div className="flex items-center justify-center">

            {product.author.id === logic.getLoggedInUserId() ? 
            <Button title="Delete" aria-label="Delete" onClick={handleDeleteClick}>Delete ❌</Button> : <Button onClick={handleAddCart}>{isInCart ? 'Remove 🛍️' : 'Add 🛍️'}</Button>}
        </div>
    </article>
}