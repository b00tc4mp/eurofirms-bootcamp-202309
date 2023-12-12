import registerUser from '../logic/registerUser'

import Logo from "../components/Logo"
import Link from '../components/Link'
import Field from '../components/Field'
import Form from "../components/Form"
import Button from '../components/Button'
import Container from '../Components/Container'

function Register(props) {

    function handleRegisterSubmit(event) {
        event.preventDefault()

        const nameInput = event.target.querySelector('#name-field')
        const emailInput = event.target.querySelector('#email-field')
        const passwordInput = event.target.querySelector('#password-field')

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            registerUser(name, email, password, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onSuccess()
            })

        } catch (error) {
            alert(error.message)
        }
    }

    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClick()
    }

    return <Container id="register-view">
        <h1>Register</h1>

        <Form id="register-form" onSubmit={handleRegisterSubmit}>
            <Field type="text" id="name-field" title="Name" required>Name</Field>

            <Field type="email" id="email-field" title="E-mail" required>E-mail</Field>

            <Field type="password" id="password-field" title="Password" required>Password</Field>

            <Button type="submit">Register</Button>
        </Form>

        <Link onClick={handleLoginClick}>Login</Link>
    </Container >
}

export default Register