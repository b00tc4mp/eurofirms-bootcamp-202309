function Login(props) {
    // Función para manejar el envío del formulario de inicio de sesión
    function handleLoginSubmit(event) {
        event.preventDefault();
        try {
            // Obtener los valores de los campos de entrada de correo electrónico y contraseña
            const emailInput = event.target.querySelector('#email-input');
            const passwordInput = event.target.querySelector('#password-input');

            // Asignar los valores de correo electrónico y contraseña a variables
            const email = emailInput.value;
            const password = passwordInput.value;

            // Autenticar al usuario utilizando el correo electrónico y la contraseña proporcionados
            sessionUserId = authenticateUser(email, password);

            // Llamar a la función 'onLoggedIn' pasada como prop para indicar que el inicio de sesión fue exitoso
            props.onLoggedIn();

            //console.log('TODO login', email, password);
        } catch (error) {
            // Mostrar una alerta en caso de error durante el inicio de sesión
            alert(error.message);
        }
    }

    // Función para manejar el clic en el enlace de registro
    function handleRegisterClick(event) {
        event.preventDefault();

        // Llamar a la función 'onRegisterClick' pasada como prop para redirigir al usuario a la página de registro
        props.onRegisterClick();
    }

    return (
        <div className="view">
            <h1>Login</h1>

            <form className="form" onSubmit={handleLoginSubmit}>
                <label className="label" htmlFor="email-input">E-mail</label>
                <input className="input" type="email" id="email-input" title="E-mail" required />

                <label className="label" htmlFor="password-input">Password</label>
                <input className="input" type="password" id="password-input" title="Password" required />

                <button className="button" type="submit">Login</button>
            </form>

            <a onClick={handleRegisterClick} href="">Register</a>
        </div>
    );
}
