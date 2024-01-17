import { useNavigate } from "react-router-dom"

import updateUserEmail from "../logic/updateUserEmail"

import Container from "../library/Container"
import Field from "../library/Field"
import Form from "../library/Form"
import Button from "../library/Button"

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

      try {
         updateUserEmail(password, oldEmail, newEmail, repeatNewEmail, (error) => {
            if (error) {
               props.onError(error)

               return
            }

            alert("email updated")
            
            navigate("/user-profile")
         })
      } catch (error) {
         props.onError(error)
      }
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
