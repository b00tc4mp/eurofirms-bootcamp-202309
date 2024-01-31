import { Button, Link, Field, Form, Container } from '../library'

import logic from '../logic'

function Register(props) {
   console.log("Register")

   function handleRegisterSubmit(event) {
      event.preventDefault()

      const nameInput = event.target.querySelector("#name-field")
      const emailInput = event.target.querySelector("#email-field")
      const passwordInput = event.target.querySelector("#password-field")

      const name = nameInput.value
      const email = emailInput.value
      const password = passwordInput.value
      const role = 'User'

         logic.registerUser(name, email, password, role)
         .then(() => {
            // Acciones en caso de éxito
            props.onSuccess()
         })
         .catch((error) => {
            // Acciones en caso de error
            props.onError(error)
         })
   }

   function handleLoginClick(event) {
      event.preventDefault()

      props.onLoginClick()
   }

   return (
      <Container align="center">

         <h1>Register</h1>

         <Form onSubmit={handleRegisterSubmit}>
         <div>
            <Field type="text" id="name-field" title="Name" required>
               Name
            </Field>
            </div>

            <div>
            <Field type="email" id="email-field" title="E-mail" required>
               E-mail
            </Field>
            </div>

            <div>
            <Field type="password" id="password-field" title="Password" required>
               Password
            </Field>
            </div>

            <Button type="submit">Register</Button>
         </Form>

         <Link onClick={handleLoginClick}>Login</Link>
      </Container>
   )
}

export default Register

