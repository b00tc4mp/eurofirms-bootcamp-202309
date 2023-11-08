function Register(props) {
    // Función para manejar el envío del formulario de registro
    function handleRegisterSubmit(event) {
        event.preventDefault();
        try {
            // Obtener los valores de los campos de entrada de nombre, correo electrónico y contraseña
            const nameInput = event.target.querySelector('#name-input');
            const emailInput = event.target.querySelector('#email-input');
            const passwordInput = event.target.querySelector('#password-input');

            // Asignar los valores de nombre, correo electrónico y contraseña a variables
            const name = nameInput.value;
            const email = emailInput.value;
            const password = passwordInput.value;

            // Registrar al usuario utilizando los valores proporcionados
            registerUser(name, email, password);

            // Llamar a la función 'onNavigateToLogin' pasada como prop para redirigir al usuario a la página de inicio de sesión
            props.onNavigateToLogin();
        } catch (error) {
            // Mostrar una alerta en caso de error durante el registro
            alert(error.message);
        }
    }

    // Función para manejar el clic en el enlace de inicio de sesión
    function handleLoginClick(event) {
        event.preventDefault();

        // Llamar a la función 'onNavigateToLogin' pasada como prop para redirigir al usuario a la página de inicio de sesión
        props.onNavigateToLogin();
    }

    return (
        <div className="view">
            <h1>Register</h1>

            <form className="form" onSubmit={handleRegisterSubmit}>
                <label className="label" htmlFor="name-input">Name</label>
                <input className="input" type="text" id="name-input" title="Name" required />

                <label className="label" htmlFor="email-input">E-mail</label>
                <input className="input" type="email" id= "email-input" title="E-mail" required />

                <label className="label" htmlFor="password-input">Password</label>
                <input className="input" type="password" id="password-input" title="Password" required />

                <button className="button" type="submit">Register</button>
            </form>

            <a onClick={handleLoginClick} href="">Login</a>
        </div>
    );
}
