import { Button, Link, Field, Form, Container } from "../library"

import { useNavigate } from 'react-router-dom'

import logic from "../logic"

function Login(props) {
   console.log("Login")

   // Inicializa el gancho navigate
   const navigate = useNavigate()

   function handleLoginSubmit(event) {
      event.preventDefault()

      const emailInput = event.target.querySelector("#email-field")
      const passwordInput = event.target.querySelector("#password-field")

      const email = emailInput.value
      const password = passwordInput.value

      try {
         logic.loginUser(email, password, (error) => {
            if (error) {
               // props.onError(error)

               return
            }

            props.onSuccess()
            // Redirige a la página de inicio después de un inicio de sesión exitoso
            navigate('/home')
         })
      } catch (error) {
         // props.onError(error)
      }
   }

   // function handleRegisterClick(event) {
   //    event.preventDefault()

   //    props.onRegisterClick()
   // }

   return (
      <Container align="center">
         <h1>Login</h1>

         <Form onSubmit={handleLoginSubmit}>
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
            {/* <button className="button" type="submit">Login</button> */}
            <Button type="submit">Login</Button>
         </Form>

         {/* <Link onClick={handleRegisterClick}>Register</Link> */}
      </Container>
   )
}

export default Login
