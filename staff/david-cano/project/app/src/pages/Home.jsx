import React from 'react'
import { AllProducts, Header, Footer } from '../components'
import { Container } from '../library'

const Home = (props) => {

    return (
        <Container align="center">
            <Header />
            <AllProducts onError={props.onError}/>
            <Footer />
        </Container>
    )
}

export default Home
