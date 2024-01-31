import { useNavigate } from 'react-router-dom'

import Container from "../library/Container"
import Field from "../library/Field"
import Form from "../library/Form"
import Button from "../library/Button"

import logic from "../logic"

function UpdatePassword(props) {
    const navigate = useNavigate()

    function handleChangePasswordSubmit(event) {
        event.preventDefault()
    
        const passwordInput = event.target.querySelector("#password-field")
        const newPasswordInput = event.target.querySelector("#new-password-field")
        const repeatNewPasswordInput = event.target.querySelector("#repeat-new-password-field")
    
        const password = passwordInput.value
        const newPassword = newPasswordInput.value
        const repeatNewPassword = repeatNewPasswordInput.value
    
        logic.
           updateUserPassword(password, newPassword, repeatNewPassword)
           .then(() => {
            // Manejar la actualización exitosa del password
            console.log("Password updated")
            props.onUpdatePasswordSubmit()

            // Mostrar la alerta
            window.alert("Password actualizada correctamente")

            // Navegar a user profile
            navigate("/user-profile")
         })
         .catch((error) => {
            // Manejar el error
            console.error("Error updating password:", error)
            props.onError(error)
         })
     }

     function handleCancelClick() {
        navigate("/user-profile")
     }

     return <>
     <Container className="mt-7">
     <Form onSubmit={handleChangePasswordSubmit}>
        <Field type="password" id="password-field" required>
           Old Password
        </Field>

        <Field type="password" id="new-password-field" required>
           New password
        </Field>

        <Field type="password" id="repeat-new-password-field" required>
           Repeat new password
        </Field>

        <Button type="submit">Actualizar</Button>
        <Button onClick={handleCancelClick}>Cancel</Button>
     </Form>
  </Container>
     </>


}

export default UpdatePassword

