import { Button, Link, Field, Form, Container } from '../library'

import logic from '../logic'

export default function Login(props) {

    function handleLoginSubmit(event) {
        event.preventDefault()

        const usernameInput = event.target.querySelector('#username-field')
        const passwordInput = event.target.querySelector('#password-field')

        const username = usernameInput.value
        const password = passwordInput.value

        try {
            logic.loginUser(username, password, error => {
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


    return <Container align="center">

        <h1>Login</h1>

        <Form onSubmit={handleLoginSubmit}>
            <Field type="username" id="username-field" title="username" required>Username</Field>

            <Field type="password" id="password-field" title="Password" required>Password</Field>

            <Button type="submit">Login</Button>

        </Form>

    </Container>
}