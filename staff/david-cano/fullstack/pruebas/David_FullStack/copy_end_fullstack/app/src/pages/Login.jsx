// Importamos componentes y elementos de la biblioteca 'library' y otros componentes personalizados
import { Button, Link, Field, Form, Container } from '../library'
import { Logo } from '../components'

// Importamos la lógica de la aplicación desde el archivo 'logic'
import logic from '../logic'

// Definimos el componente funcional Login que recibe las propiedades (props)
export default function Login(props) {
    // Imprimimos en la consola un mensaje indicando que estamos en el componente Login
    console.log('Login')

    // Función para manejar el envío del formulario de inicio de sesión
    function handleLoginSubmit(event) {
        // Prevenimos el comportamiento predeterminado del formulario
        event.preventDefault()

        // Obtenemos los elementos de entrada del formulario por sus identificadores
        const emailInput = event.target.querySelector('#email-field')
        const passwordInput = event.target.querySelector('#password-field')

        // Obtenemos los valores de los campos de correo electrónico y contraseña
        const email = emailInput.value
        const password = passwordInput.value

        try {
            // Llamamos a la función 'loginUser' de la lógica para realizar el inicio de sesión
            logic.loginUser(email, password, (error) => {
                // Verificamos si hay un error durante el inicio de sesión
                if (error) {
                    // Llamamos a la función 'onError' pasando el error como argumento
                    props.onError(error)

                    return
                }

                // Llamamos a la función 'onSuccess' para indicar que el inicio de sesión fue exitoso
                props.onSuccess()
            })
        } catch (error) {
            // Manejamos posibles errores y llamamos a la función 'onError' pasando el error como argumento
            props.onError(error)
        }
    }

    // Función para manejar el clic en el enlace 'Register'
    function handleRegisterClick(event) {
        // Prevenimos el comportamiento predeterminado del enlace
        event.preventDefault()

        // Llamamos a la función 'onRegisterClick' para indicar que se ha hecho clic en el enlace de registro
        props.onRegisterClick()
    }

    // Renderizamos la estructura del componente Login

    return (
        // Utilizamos el componente Container con la propiedad 'align' establecida en 'center'
        <Container align="center">
            {/* Componente Logo para mostrar el logotipo de la aplicación */}
            <Logo />

            {/* Encabezado principal del formulario de inicio de sesión */}
            <h1>Login</h1>

            {/* Formulario de inicio de sesión con la función de devolución de llamada 'handleLoginSubmit' */}
            <Form onSubmit={handleLoginSubmit}>
                {/* Campo de entrada para el correo electrónico con título y requerido */}
                <Field type="email" id="email-field" title="E-mail" required>E-mail</Field>

                {/* Campo de entrada para la contraseña con título y requerido */}
                <Field type="password" id="password-field" title="Password" required>Password</Field>

                {/* Botón de envío del formulario */}
                <Button type="submit">Login</Button>
            </Form>

            {/* Enlace para redirigir al usuario a la página de registro */}
            <Link onClick={handleRegisterClick}>Register</Link>
        </Container>
    )
}
