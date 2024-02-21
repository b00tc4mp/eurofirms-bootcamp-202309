import React from 'react'
import { AllProducts, Header, Footer } from '../components'
const Home = (props) => {

    return (
        <div>
            <Header />
            <AllProducts onError={props.onError}/>
            <Footer />
        </div>
    )
}

export default Home
