import { useState } from "react"

import Container from "../library/Container"
import Field from "../library/Field"
import Form from "../library/Form"
import Button from "../library/Button"

import updateUserPassword from "../logic/updateUserPassword"
import updateUserEmail from "../logic/updateUserEmail"

function UserProfile(props) {
   const [view, setView] = useState(null)

   function handleChangeEmailClick() {
      setView("change-email")
   }

   function handleChangePasswordClick() {
      setView("change-password")
   }

   function handleCancelClick() {
      setView(null)
   }

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
               console.log('password updated')
               props.onNewPasswordSubmit()
            }
         })
      } catch (error) {
         props.onError(error)
      }
   }

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

      try {
         updateUserEmail(password, oldEmail, newEmail, repeatNewEmail, error => {
            if (error) {
               props.onError(error)
            } else {
               console.log('email updated')
               props.onNewEmailSubmit()
            }
         })
      } catch (error) {
         props.onError(error)
      }
   }

   return (
      <>
         <Container>
            <Button onClick={handleChangeEmailClick}>Change Email</Button>
            <Button onClick={handleChangePasswordClick}>Change Password</Button>
         </Container>

         {view === "change-password" && (
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
         )}

         {view === "change-email" && (
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
         )}
      </>
   )
}

export default UserProfile
