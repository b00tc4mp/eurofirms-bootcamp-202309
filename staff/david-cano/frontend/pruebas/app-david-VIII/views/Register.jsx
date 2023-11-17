// Componente funcional para la vista de registro
function Register(props) {
    // Función para manejar la presentación del formulario de registro
    function handleRegisterSubmit(event) {
        // Evitar que se envíe el formulario y recargue la página
        event.preventDefault()
        
        try {
            // Obtener los elementos de entrada de nombre, correo electrónico y contraseña del formulario
            const nameInput = event.target.querySelector('#name-input')
            const emailInput = event.target.querySelector('#email-input')
            const passwordInput = event.target.querySelector('#password-input')

            // Obtener los valores de nombre, correo electrónico y contraseña
            const name = nameInput.value
            const email = emailInput.value
            const password = passwordInput.value

            // Registrar al usuario con los datos proporcionados
            registerUser(name, email, password)

            // Llamar a la función proporcionada por las props para indicar que se debe navegar a la vista de inicio de sesión
            props.onNavigateToLogin()

        } catch (error) {
            // Mostrar una alerta en caso de error durante el proceso de registro
            alert(error.message)
        }
    }

    // Función para manejar el clic en el enlace de inicio de sesión
    function handleLoginClick(event) {
        // Evitar que se ejecute el comportamiento predeterminado del enlace
        event.preventDefault()

        // Llamar a la función proporcionada por las props para indicar que se hizo clic en el enlace de inicio de sesión
        props.onNavigateToLogin()
    }

    // Renderizar la vista de registro
    return (
        <div className="view">
            <h1>Register</h1>

            {/* Formulario de registro */}
            <form className="form" onSubmit={handleRegisterSubmit}>
                <label className="label" htmlFor="name-input">Name</label>
                <input className="input" type="text" id="name-input" title="Name" required />

                <label className="label" htmlFor="email-input">E-mail</label>
                <input className="input" type="email" id="email-input" title="E-mail" required />

                <label className="label" htmlFor="password-input">Password</label>
                <input className="input" type="password" id="password-input" title="Password" required />

                <button className="button" type="submit">Register</button>
            </form>

            {/* Enlace para redirigir a la página de inicio de sesión */}
            <a onClick={handleLoginClick} href="">Login</a>
        </div>
    );
}
