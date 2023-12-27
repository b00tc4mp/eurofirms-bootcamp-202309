import { useNavigate } from 'react-router-dom'

import updateUserPassword from "../logic/updateUserPassword"

import Container from "../library/Container"
import Field from "../library/Field"
import Form from "../library/Form"
import Button from "../library/Button"

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
    
        try {
           updateUserPassword(password, newPassword, repeatNewPassword, error => {
              if (error) {
                 props.onError(error)
              } else {
                 alert('password updated')
                 
                 navigate("/user-profile")
              }
           })
        } catch (error) {
           props.onError(error)
        }
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

