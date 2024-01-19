import { Button, Container, Field, Label, Select, Form } from '../../library'

import logic from '../../logic'

export default function NewPost(props) {
    console.log('Register UserByAdmin')

    function handleRegisterUserSubmit(event) {
        event.preventDefault()

        const nameInput = event.target.querySelector('#name-field')
        const usernameInput = event.target.querySelector('#username-field')
        const passwordInput = event.target.querySelector('#password-field')
        const roleSelect = event.target.querySelector('#role-select')

        const name = nameInput.value
        const username = usernameInput.value
        const password = passwordInput.value
        const role = roleSelect.value

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

            <Label htmlFor="role-field">Rol de usuario</Label>
            <select id="role-select" required>
                <option value="">Selecciona un rol</option>
                <option value="secretaria">Secretaría</option>
                <option value="juez">Juez</option>
                <option value="administrador">Administrador</option>
            </select>

            <Field type="password" id="password-field" required>Contraseña</Field>

            <Button type="submit">Registrar</Button>
            <Button onClick={handleCancelClick}>Cancelar</Button>
        </Form>
    </Container>
}