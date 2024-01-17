import { Button, Link, Field, Form, Container } from '../library'

import logic from '../logic'

export default function Register(props) {
    console.log('Register')

    function handleRegisterSubmit(event) {
        event.preventDefault()

        const nameInput = event.target.querySelector('#name-field')
        const usernameInput = event.target.querySelector('#username-field')
        const passwordInput = event.target.querySelector('#password-field')
        const roleInput = event.target.querySelector('#role-input');

        const name = nameInput.value
        const username = usernameInput.value
        const password = passwordInput.value
        const role = roleInput.value;

        try {
            logic.registerUser(name, username, password, role, error => {
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

    return <Container align="center">
        <Logo />

        <h1>Register</h1>

        <Form onSubmit={handleRegisterSubmit}>
            <Field type="text" id="name-field" title="Name" required>Name</Field>

            <Field type="text" id="username-field" title="Username" required>Username</Field>

            <label htmlFor="role-input">Role</label>
            <select id="role-field" onChange={handleRoleChange} value={role} required>
                <option value="" disabled>Select a role</option>
                <option value="administrador">Administrador</option>
                <option value="secretaria">Secretaría</option>
                <option value="juez">Juez</option>
                <option value="juezC">Juez-C</option>
            </select>

            <Field type="password" id="password-field" title="Password" required>Password</Field>


            <Button type="submit">Register</Button>
        </Form>

    </Container>
}