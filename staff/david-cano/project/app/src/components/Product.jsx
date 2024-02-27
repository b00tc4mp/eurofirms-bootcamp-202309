import Button from '../library/Button'

import logic from '../logic'

export default function Product(props) {
    console.log('Product')

    const product = props.product

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

    // function handleDeleteClick() {
    //     const confirmed = confirm('Are you sure do you want to delete the product?')

    //     if (confirmed)
    //         try {
    //             logic.deleteProduct(product.id, error => {
    //                 if (error) {
    //                     props.onError(error)

    //                     return
    //                 }

    //                 props.onDeleted()
    //             })
    //         } catch (error) {
    //             props.onError(error)
    //         }
    // }

    return <article className="flex flex-col p-[.5rem] hover:bg-[skyblue]">
        <p>{product.name}</p>
        <img className="max-w-[300px]" src={product.img} />
        <p>{product.description}</p>
        <p>{product.price}</p>
        <Button onClick = {handleAddCart}>Add Cart</Button>

        {/* <div className="flex">

            {product.author.id === logic.getLoggedInUserId() ? <Button title="Delete" aria-label="Delete" onClick={handleDeleteClick}>🗑️</Button> : null}
        </div> */}
    </article>
}