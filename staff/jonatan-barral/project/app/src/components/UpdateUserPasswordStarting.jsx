import { useNavigate } from 'react-router-dom'

import logic from '../logic'

import { Container, Field, Form, Button } from '../library'

function updateUserPasswordStarting(props) {
    const navigate = useNavigate()

    function handleChangePasswordSubmit(event) {
        event.preventDefault()

        const passwordInput = event.target.querySelector("#password-field")
        const newPasswordInput = event.target.querySelector("#new-password-field")
        const repeatNewPasswordInput = event.target.querySelector("#repeat-new-password-field")

        const password = passwordInput.value
        const newPassword = newPasswordInput.value
        const repeatNewPassword = repeatNewPasswordInput.value
        logic.updateUserPasswordStarting(password, newPassword, repeatNewPassword)
            .then(() => {
                alert('Contraseña actualizada')
                props.onChangePassword()
            })
            .catch(error => {
                props.onError(error)
            })
    }



    return <Container align="center">
        <h2>Modifica la contraseña para continuar</h2>
        <Form onSubmit={handleChangePasswordSubmit}>
            <Field type="password" id="password-field" required>Contraseña anterior</Field>

            <Field type="password" id="new-password-field" required>Nueva contraseña</Field>

            <Field type="password" id="repeat-new-password-field" required>Repite la nueva contraseña</Field>

            <Button type="submit">Actualizar</Button>
        </Form>
    </Container>


}

export default updateUserPasswordStarting