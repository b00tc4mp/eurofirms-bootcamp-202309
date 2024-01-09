// Importar el componente 'useNavigate' de la biblioteca 'react-router-dom'
import { useNavigate } from 'react-router-dom'

// Importar la función 'updateUserPassword' desde el módulo 'updateUserPassword' en la carpeta 'logic'
import updateUserPassword from '../logic/updateUserPassword'

// Importar los componentes 'Container', 'Field', 'Form' y 'Button' desde sus respectivos archivos
import Container from '../library/Container'
import Field from '../library/Field'
import Form from '../library/Form'
import Button from '../library/Button'

// Definir el componente funcional 'UpdatePassword' que permite actualizar la contraseña del usuario
function UpdatePassword(props) {
    // Obtener la función 'navigate' del componente 'useNavigate' para cambiar de página
    const navigate = useNavigate()

    // Función para manejar el envío del formulario al intentar cambiar la contraseña
    function handleChangePasswordSubmit(event) {
        // Prevenir el comportamiento predeterminado del formulario (evitar que la página se recargue)
        event.preventDefault()

        // Obtener los elementos de entrada de contraseña del formulario
        const passwordInput = event.target.querySelector("#password-field")
        const newPasswordInput = event.target.querySelector("#new-password-field")
        const repeatNewPasswordInput = event.target.querySelector("#repeat-new-password-field")

        // Obtener los valores de los campos de entrada
        const password = passwordInput.value
        const newPassword = newPasswordInput.value
        const repeatNewPassword = repeatNewPasswordInput.value

        // Intentar actualizar la contraseña llamando a la función 'updateUserPassword'
        try {
            updateUserPassword(password, newPassword, repeatNewPassword, error => {
                // Manejar errores y notificar al componente padre si ocurre alguno
                if (error) {
                    props.onError(error)
                } else {
                    // Mostrar una alerta indicando que la contraseña se actualizó exitosamente
                    alert('password updated')
                    
                    // Navegar a la página de perfil de usuario después de la actualización exitosa
                    navigate("/user-profile")
                }
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
                {/* Formulario para cambiar la contraseña del usuario */}
                <Form onSubmit={handleChangePasswordSubmit}>
                    {/* Campo de entrada para la contraseña actual */}
                    <Field type="password" id="password-field" required>
                        Old Password
                    </Field>

                    {/* Campo de entrada para la nueva contraseña */}
                    <Field type="password" id="new-password-field" required>
                        New password
                    </Field>

                    {/* Campo de entrada para repetir la nueva contraseña */}
                    <Field type="password" id="repeat-new-password-field" required>
                        Repeat new password
                    </Field>

                    {/* Botón para enviar el formulario y actualizar la contraseña */}
                    <Button type="submit">Actualizar</Button>

                    {/* Botón para cancelar la actualización y volver a la página de perfil de usuario */}
                    <Button onClick={handleCancelClick}>Cancel</Button>
                </Form>
            </Container>
        </>
    )
}

// Exportar el componente 'UpdatePassword' para que pueda ser utilizado en otros archivos
export default UpdatePassword
