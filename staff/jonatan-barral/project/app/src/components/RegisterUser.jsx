import { Button, Container, Field, Form } from '../library'

import logic from '../logic'

export default function NewPost(props) {
    console.log('NewPost')

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const nameInput = event.target.querySelector('#name-field')
        const usernameInput = event.target.querySelector('#username-field')
        const passwordInput = event.target.querySelector('#password-field')
        const roleInput = event.target.querySelector('#role-field')

        const name = nameInput.value
        const username = usernameInput.value
        const passwor = passwordInput.value

        try {
            logic.registerUser(name, username, password, role, error => {
                if (error) {
                    props.onError(error)

                    return
                }

                props.onRegisterUserSubmit()
            })
        } catch (error) {
            props.onError(error)
        }
    }

    function handleCancelClick() {
        props.onRegisterUserCancelClick()
    }

    return <Container align="center">
        <h2>Registrar un usuario</h2>

        <Form onSubmit={handleRegisterUserSubmit}>
            <Field type="text" id="name-field" required>Nombre</Field>

            <Field type="text" id="username-field" required>Nombre de usuario</Field>

            <Field type="text" id="role-field" required>Rol de usuario</Field>

            <Field type="password" id="password-field" required>Contraseña</Field>

            <Button type="submit">Registrar</Button>
            <Button onClick={handleCancelClick}>Cancelar</Button>
        </Form>
    </Container>
}