
//Login. 
import authenticateUser from "../logic/authenticateUser"

import Button from '../components/Button'
import Link from '../components/Link'
import Field from "../components/Field"
import Form from "../components/Form"
import Container from '../components/Container'



function Login(props) {
    function handleLoginSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-field')
        const passwordInput = event.target.querySelector('#password-field')

        const email = emailInput.value
        const password = passwordInput.value

        //La construcción try... catch permite manejar errores de tiempo de ejecución.Literalmente permite “intentar(try)” ejecutar el código y “atrapar(catch)” errores que pueden ocurrir en él.


        try {
            window.sessionUserId = authenticateUser(email, password)

            props.onSuccess()
        } catch (error) {
            alert(error.message)
        }
    }

    //onSuccess(en éxito)

    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClick()
    }

    return <Container align="center">
        <h1>Login</h1>

        <form onSubmit={handleLoginSubmit}>
            <Field type="email" id="email-field" title="Email" required>Email</Field>
            <Field type="password" id="password-field" title="Password" required>Password</Field>

            {/* <button className="button" type="submit">Login</button> */}


            <Button type="submit">Login</Button>
        </form>


        <Link onClick={handleRegisterClick}>Register</Link>
    </Container>
}
export default Login