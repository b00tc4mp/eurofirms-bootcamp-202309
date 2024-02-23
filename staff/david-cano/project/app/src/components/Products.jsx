import Container from '../library/Container'

import Product from './Product'

export default function Products(props) {
    console.log('Products')

    return <Container className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-20" align="center">
        {props.products.map(function (product) {
            return <Product key={product.id} product={product} onCartAdd={props.onCartItemAdd} 
            onDeleted={props.onProductDeleted} onError={props.onError} />
        })}
    </Container>
}