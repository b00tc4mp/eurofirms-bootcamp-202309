// Importar el gancho 'useNavigate' de la biblioteca 'react-router-dom'
import { useNavigate } from "react-router-dom"

// Importar la función 'updateUserEmail' desde el módulo 'updateUserEmail' en la carpeta 'logic'
import updateUserEmail from "../logic/updateUserEmail"

// Importar los componentes 'Container', 'Field', 'Form' y 'Button' desde sus respectivos archivos
import Container from "../library/Container"
import Field from "../library/Field"
import Form from "../library/Form"
import Button from "../library/Button"

// Definir el componente funcional 'UpdateEmail' que permite actualizar la dirección de correo electrónico
function UpdateEmail(props) {
   // Obtener la función 'navigate' del gancho 'useNavigate' para cambiar de página
   const navigate = useNavigate()

   // Función para manejar el envío del formulario al intentar cambiar la dirección de correo electrónico
   function handleChangeEmailSubmit(event) {
      // Prevenir el comportamiento predeterminado del formulario (evitar que la página se recargue)
      event.preventDefault()

      // Obtener los elementos de entrada de contraseña y direcciones de correo electrónico del formulario
      const passwordInput = event.target.querySelector("#password-field")
      const oldEmailInput = event.target.querySelector("#old-email-field")
      const newEmailInput = event.target.querySelector("#new-email-field")
      const repeatNewEmailInput = event.target.querySelector("#repeat-new-email-field")

      // Obtener los valores de los campos de entrada
      const password = passwordInput.value
      const oldEmail = oldEmailInput.value
      const newEmail = newEmailInput.value
      const repeatNewEmail = repeatNewEmailInput.value

      // Intentar actualizar la dirección de correo electrónico llamando a la función 'updateUserEmail'
      try {
         updateUserEmail(password, oldEmail, newEmail, repeatNewEmail, (error) => {
            // Manejar errores y notificar al componente padre si ocurre alguno
            if (error) {
               props.onError(error)

               return
            }

            // Mostrar una alerta indicando que la dirección de correo electrónico se actualizó exitosamente
            alert("email updated")
            
            // Navegar a la página de perfil de usuario después de la actualización exitosa
            navigate("/user-profile")
         })
      } catch (error) {
         // Manejar errores y notificar al componente padre si ocurre alguno
         props.onError(error)
      }
   }

   // Función para manejar el evento de clic en el botón "Cancelar"
   function handleCancelClick() {
      // Navegar a la página de perfil de usuario al hacer clic en el botón "Cancelar"
      navigate("/user-profile")
   }

   // Renderizar los elementos del formulario utilizando los componentes importados
   return (
      <>
         {/* Contenedor principal del formulario */}
         <Container className="mt-7">
            {/* Formulario para cambiar la dirección de correo electrónico */}
            <Form onSubmit={handleChangeEmailSubmit}>
               {/* Campo de entrada para la contraseña */}
               <Field type="password" id="password-field" required>
                  Password
               </Field>

               {/* Campo de entrada para la dirección de correo electrónico antigua */}
               <Field type="email" id="old-email-field" required>
                  Old email
               </Field>

               {/* Campo de entrada para la nueva dirección de correo electrónico */}
               <Field type="email" id="new-email-field" required>
                  New email
               </Field>

               {/* Campo de entrada para repetir la nueva dirección de correo electrónico */}
               <Field type="email" id="repeat-new-email-field" required>
                  Repeat new email
               </Field>

               {/* Botón para enviar el formulario y actualizar la dirección de correo electrónico */}
               <Button type="submit">Actualizar</Button>

               {/* Botón para cancelar la actualización y volver a la página de perfil de usuario */}
               <Button onClick={handleCancelClick}>Cancel</Button>
            </Form>
         </Container>
      </>
   )
}

// Exportar el componente 'UpdateEmail' para que pueda ser utilizado en otros archivos
export default UpdateEmail
