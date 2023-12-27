import { Button, Link, Field, Form, Containes } from '../library'



import logic from '../logic'

export default function Login(props) {
    console.log('Login')

    function handleLoginSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email.field')
        const passwordInput = event.target.querySelector('#password-field')

        const email = emailInput.value
        const password = passwordInput.value

        try {
            logic.loginUer(email, password, error => {
                if (error) {
                    props.onError(error)

                    return
                }

                props.onSuccess()
            })
        } catch (error) {
            props.onError(error, messafe)
        }
    }

    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClick()
    }

    return <Container align='center'>


        <h1>Login</h1>

        <Form onSubmit={handleLoginSubmit}>
            <Field type="email" id="email-field" title="E-mail" required>E-mail</Field>

            <Field type="password" id="password-field" title="Password" required>Password</Field>

            {/* <button className="button" type="submit">Login</button> */}
            <Button type="submit">Login</Button>
        </Form>

        <Link onClick={handleRegisterClick}>Register</Link>
    </Container>
}