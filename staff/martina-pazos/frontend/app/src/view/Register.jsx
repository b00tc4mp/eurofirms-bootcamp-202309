//Register. 
import registerUser from "../logic/registerUser"

import Field from '../components/Field'
import Form from '../components/Form'
import Container from '../components/Container'
import Button from '../components/Button'
import Link from '../components/Link'



function Register(props) {
    function handleRegisterSubmit(event) {
        event.preventDefault()

        const nameInput = event.target.querySelector('#name-field')
        const emailInput = event.target.querySelector('#email-field')
        const passwordInput = event.target.querySelector('#password-field')

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value


        //La construcción try... catch permite manejar errores de tiempo de ejecución. Literalmente permite “intentar (try)” ejecutar el código y “atrapar (catch)” errores que pueden ocurrir en él.

        try {
            registerUser(name, email, password)

            props.onSuccess()
        } catch (error) {
            alert(error.message)
        }

    }

    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClick()
    }

    return <Container align="center">

        <h1>Register</h1>
        <form onSubmit={handleRegisterSubmit}>
            <Field type="text" id="name-field" title="Name" required>Name</Field>

            <Field type="email" id="email-field" title="Email" required>E-mail</Field>

            <Field type="password" id="password-field" title="Password" required>Password</Field>


            <button type="submit">Register</button>
        </form>




        <Link onClick={handleLoginClick}>Login</Link>
    </Container>
}

export default Register    