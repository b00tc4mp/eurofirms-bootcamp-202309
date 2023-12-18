import registerUser from '../logic/registerUser'

import Button from '../library/Button'
import Link from '../library/Link'
import Field from '../library/Field'
import Form from '../library/Form'
import Container from '../library/Container'

import Logo from '../components/Logo'

function Register(props) {
    console.log('Register')

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
                    props.onError(error)

                    return
                }

                props.onSuccess()
            })
        } catch (error) {
            props.onError(error)
        }
    }

    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClick()
    }

    return <Container align='center'>
        <Logo />

        <h1>Register</h1>

        <Form onSubmit={handleRegisterSubmit}>
            <Field type="text" id="name-field" title="Name" required>Name</Field>

            <Field type="email" id="email-field" title="E-mail" required>E-mail</Field>

            <Field type="password" id="password-field" title="Password" required>Password</Field>

            <Button type="submit">Register</Button>
        </Form>

        <Link onClick={handleLoginClick}>Login</Link>
    </Container>
}

export default Register