import authenticateUser from '../logic/authenticateUser'

import Logo from '../components/Logo'
import Container from "../components/Container"
import Link from '../components/Link'
import Field from "../components/Field"
import Form from '../components/Form'
import Button from '../components/Button'

function Login(props) {

    function handleLoginSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-field')
        const passwordInput = event.target.querySelector('#password-field')

        const email = emailInput.value
        const password = passwordInput.value

        try {
            sessionUserId = authenticateUser(email, password)

            props.onSuccess()
        } catch (error) {
            alert(error.message)
        }
    }

    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClick()
    }

    return <Container align="center">
        <Logo />

        <h1>Login</h1>

        <Form id="login-form" onSubmit={handleLoginSubmit}>

            <Field type="email" id="email-field" title="E-mail" required>E-mail</Field>

            <Field type="password" id="password-field" title="Password" required>Password</Field>


            <Button type="submit">Login</Button>

        </Form>

        <Link onClick={handleRegisterClick}>Register</Link>
    </Container>
}

export default Login