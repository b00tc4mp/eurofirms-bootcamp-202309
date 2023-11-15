// Componente funcional para la vista de inicio de sesión
function Login(props) {
    // Función para manejar la presentación del formulario de inicio de sesión
    function handleLoginSubmit(event) {
        // Evitar que se envíe el formulario y recargue la página
        event.preventDefault()

        try {
            // Obtener los elementos de entrada de correo electrónico y contraseña del formulario
            const emailInput = event.target.querySelector('#email-input')
            const passwordInput = event.target.querySelector('#password-input')

            // Obtener los valores de correo electrónico y contraseña
            const email = emailInput.value
            const password = passwordInput.value

            // Autenticar al usuario con los datos proporcionados
            sessionUserId = authenticateUser(email, password)

            // Llamar a la función proporcionada por las props para indicar que el usuario ha iniciado sesión
            props.onLoggedIn();

            // Console log para depuración (comentado para la versión final)
            // console.log('TODO login', email, password)

        } catch (error) {
            // Mostrar una alerta en caso de error durante el proceso de inicio de sesión
            alert(error.message)
        }
    }

    // Función para manejar el clic en el enlace de registro
    function handleRegisterClick(event) {
        // Evitar que se ejecute el comportamiento predeterminado del enlace
        event.preventDefault()

        // Llamar a la función proporcionada por las props para indicar que se hizo clic en el enlace de registro
        props.onRegisterClick()
    }

    // Renderizar la vista de inicio de sesión
    return (
        <div className="view">
            <h1>Login</h1>

            {/* Formulario de inicio de sesión */}
            <form className="form" onSubmit={handleLoginSubmit}>
                <label className="label" htmlFor="email-input">E-mail</label>
                <input className="input" type="email" id="email-input" title="E-mail" required />

                <label className="label" htmlFor="password-input">Password</label>
                <input className="input" type="password" id="password-input" title="Password" required />

                <button className="button" type="submit">Login</button>
            </form>

            {/* Enlace para redirigir a la página de registro */}
            <a onClick={handleRegisterClick} href="">Register</a>
        </div>
    );
}
