// Importamos componentes y elementos de la biblioteca 'library' y otros componentes personalizados
import { Button, Link, Field, Form, Container } from '../library'
import { Logo } from '../components'

// Importamos la lógica de la aplicación desde el archivo 'logic'
import logic from '../logic'

// Definimos el componente funcional Register que recibe las propiedades (props)
export default function Register(props) {
    // Imprimimos en la consola un mensaje indicando que estamos en el componente Register
    console.log('Register')

    // Función para manejar el envío del formulario de registro
    function handleRegisterSubmit(event) {
        // Prevenimos el comportamiento predeterminado del formulario
        event.preventDefault()

        // Obtenemos los elementos de entrada del formulario por sus identificadores
        const nameInput = event.target.querySelector('#name-field')
        const emailInput = event.target.querySelector('#email-field')
        const passwordInput = event.target.querySelector('#password-field')

        // Obtenemos los valores de los campos de nombre, correo electrónico y contraseña
        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        try {
            // Llamamos a la función 'registerUser' de la lógica para realizar el registro de usuario
            logic.registerUser(name, email, password, error => {
                // Verificamos si hay un error durante el registro
                if (error) {
                    // Llamamos a la función 'onError' pasando el error como argumento
                    props.onError(error)

                    return
                }

                // Llamamos a la función 'onSuccess' para indicar que el registro fue exitoso
                props.onSuccess()
            })
        } catch (error) {
            // Manejamos posibles errores y llamamos a la función 'onError' pasando el error como argumento
            props.onError(error)
        }
    }

    // Función para manejar el clic en el enlace 'Login'
    function handleLoginClick(event) {
        // Prevenimos el comportamiento predeterminado del enlace
        event.preventDefault()

        // Llamamos a la función 'onLoginClick' para indicar que se ha hecho clic en el enlace de inicio de sesión
        props.onLoginClick()
    }

    // Renderizamos la estructura del componente Register

    return (
        // Utilizamos el componente Container con la propiedad 'align' establecida en 'center'
        <Container align='center'>
            {/* Componente Logo para mostrar el logotipo de la aplicación */}
            <Logo />

            {/* Encabezado principal del formulario de registro */}
            <h1>Register</h1>

            {/* Formulario de registro con la función de devolución de llamada 'handleRegisterSubmit' */}
            <Form onSubmit={handleRegisterSubmit}>
                {/* Campo de entrada para el nombre con título y requerido */}
                <Field type="text" id="name-field" title="Name" required>Name</Field>

                {/* Campo de entrada para el correo electrónico con título y requerido */}
                <Field type="email" id="email-field" title="E-mail" required>E-mail</Field>

                {/* Campo de entrada para la contraseña con título y requerido */}
                <Field type="password" id="password-field" title="Password" required>Password</Field>

                {/* Botón de envío del formulario */}
                <Button type="submit">Register</Button>
            </Form>

            {/* Enlace para redirigir al usuario a la página de inicio de sesión */}
            <Link onClick={handleLoginClick}>Login</Link>
        </Container>
    )
}
