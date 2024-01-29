import React, { useRef } from "react"

import { useNavigate } from "react-router-dom"

import Container from "../library/Container"
import Field from "../library/Field"
import Form from "../library/Form"
import Button from "../library/Button"

import logic from "../logic"

function UpdateEmail(props) {
   const navigate = useNavigate()

   function handleChangeEmailSubmit(event) {
      event.preventDefault()

      const passwordInput = event.target.querySelector("#password-field")
      const oldEmailInput = event.target.querySelector("#old-email-field")
      const newEmailInput = event.target.querySelector("#new-email-field")
      const repeatNewEmailInput = event.target.querySelector("#repeat-new-email-field")

      const password = passwordInput.value
      const oldEmail = oldEmailInput.value
      const newEmail = newEmailInput.value
      const repeatNewEmail = repeatNewEmailInput.value

      logic
         .updateUserEmail(password, oldEmail, newEmail, repeatNewEmail)
         .then(() => {
            // Manejar la actualización exitosa del email
            console.log("Email updated")
            props.onUpdateEmailSubmit()

            // Mostrar la alerta
            window.alert("Email actualizado correctamente")

            // Navegar a user profile
            navigate("/user-profile")
         })
         .catch((error) => {
            // Manejar el error
            console.error("Error updating email:", error)
            props.onError(error)
         })
   }

   function handleCancelClick() {
      navigate("/user-profile")
   }

   return (
      <>
         <Container className="mt-7">
            <Form onSubmit={handleChangeEmailSubmit}>
               <Field type="password" id="password-field" required>
                  Password
               </Field>

               <Field type="email" id="old-email-field" required>
                  Old email
               </Field>

               <Field type="email" id="new-email-field" required>
                  New email
               </Field>

               <Field type="email" id="repeat-new-email-field" required>
                  Repeat new email
               </Field>

               <Button type="submit">Actualizar</Button>
               <Button onClick={handleCancelClick}>Cancel</Button>
            </Form>
         </Container>
      </>
   )
}

export default UpdateEmail
