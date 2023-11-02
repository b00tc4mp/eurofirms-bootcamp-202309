function Register(props) {
    // Esta función maneja el envío del formulario de registro.
    function handleRegisterSubmit(event) {
        event.preventDefault()
        try {
            // Obtiene las referencias a los campos de entrada de nombre, correo electrónico y contraseña.
            const nameInput = event.target.querySelector('#name-input')
            const emailInput = event.target.querySelector('#email-input')
            const passwordInput = event.target.querySelector('#password-input')
 // Obtiene los valores de nombre, correo electrónico y contraseña de los campos de entrada.
            const name = nameInput.value
            const email = emailInput.value
            const password = passwordInput.value
 // Llama a una función "registerUser" para registrar al usuario con nombre, correo y contraseña.
            registerUser(name, email, password)
// Llama a la función proporcionada en las propiedades "onNavigateToLogin" para redirigir al usuario a la página de inicio de sesión.
            props.onNavigateToLogin()
// Imprime un mensaje en la consola con información de depuración.
            console.log('TODO register', name, email, password)

        }
        catch (error) {
            // En caso de error, muestra una alerta con el mensaje de error.
            alert(error.message)
        }
        
    }
// Esta función maneja el clic en el enlace "Login".
    function handleLoginClick(event) {
        event.preventDefault()
// Llama a la función proporcionada en las propiedades "onNavigateToLogin" para redirigir al usuario a la página de inicio de sesión.
        props.onNavigateToLogin()
    }
 // Renderiza el contenido del componente de registro.
    return <div className="view">
        <h1>Register</h1>

        <form className="form" onSubmit={handleRegisterSubmit}>
            <label className="label" htmlFor="name-input">Name</label>
            <input className="input" type="text" id="name-input" title="Name" required />

            <label className="label" htmlFor="email-input">E-mail</label>
            <input className="input" type="email" id="email-input" title="E-mail" required />

            <label className="label" htmlFor="password-input">Password</label>
            <input className="input" type="password" id="password-input" title="Password" required />

            <button className="button" type="submit">Register</button>
        </form>

        <a onClick={handleLoginClick} href="" className = "color-a">Login</a>
    </div>
}