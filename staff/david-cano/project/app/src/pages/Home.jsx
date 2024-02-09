import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AllProducts, Header, Footer } from '../components'
import logic from '../logic'
const Home = (props) => {
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        try {
            logic.retrieveUser((error, user) => {
                if (error) {
                    props.onError(error)
                    return
                }

                if (user.role === 'admin') navigate('/dashboard')

                setUser(user)
            })
        } catch (error) {
            props.onError(error)
        }
    })

    return (
        <div>
            <Header />
            <AllProducts />
            <Footer />
        </div>
    )
}

export default Home
