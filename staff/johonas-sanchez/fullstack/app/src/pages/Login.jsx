import { Button, Link, Field, Form, Container } from '../library'

import { Logo } from '../components'

import logic from '../logic'

function Login(props) {
   console.log("Login")

   function handleLoginSubmit(event) {
      event.preventDefault()

      const emailInput = event.target.querySelector("#email-field")
      const passwordInput = event.target.querySelector("#password-field")

      const email = emailInput.value
      const password = passwordInput.value

      try {
         logic.loginUser(email, password, (error) => {
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

   function handleRegisterClick(event) {
      event.preventDefault()

      props.onRegisterClick()
   }

   return (
      <Container align="center">
         <Logo />

         <h1>Login</h1>

         <Form onSubmit={handleLoginSubmit}>
            <Field type="email" id="email-field" title="E-mail" required>
               E-mail
            </Field>

            <Field type="password" id="password-field" title="Password" required>
               Password
            </Field>

            {/* <button className="button" type="submit">Login</button> */}
            <Button type="submit">Login</Button>
         </Form>

         <Link onClick={handleRegisterClick}>Register</Link>
      </Container>
   )
}

export default Login
