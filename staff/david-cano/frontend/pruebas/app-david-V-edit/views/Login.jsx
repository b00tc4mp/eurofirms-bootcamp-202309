function Login(props) {
    // Esta función maneja el envío del formulario de inicio de sesión.
    function handleLoginSubmit(event) {
        event.preventDefault()
        try{
            // Obtiene las referencias a los campos de entrada de correo electrónico y contraseña.
        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')
  // Obtiene los valores de correo electrónico y contraseña de los campos de entrada.
        const email = emailInput.value
        const password = passwordInput.value
// Llama a una función "authenticateUser" para autenticar al usuario con el correo y la contraseña.
        authenticateUser(email, password)

        loggedInEmail = email
// Llama a la función proporcionada en las propiedades "onLoggedIn" para notificar que el usuario ha iniciado sesión.
        props.onLoggedIn()
 // Imprime un mensaje en la consola con información de depuración.

        }catch (error){
            // En caso de error, muestra una alerta con el mensaje de error.
            alert(error.message)
        }
    }
    // Esta función maneja el clic en el enlace "Register".
    function handleRegisterClick(event) {
        event.preventDefault()
// Llama a la función proporcionada en las propiedades "onRegisterClick" para notificar que se hizo clic en "Register".
        props.onRegisterClick()
    }
// Renderiza el contenido del componente de inicio de sesión.
    return <div className="view">
        <h1>Login</h1>

        <form className="form" onSubmit={handleLoginSubmit}>
            <label className="label" htmlFor="email-input">E-mail</label>
            <input className="input" type="email" id="email-input" title="E-mail" required />

            <label className="label" htmlFor="password-input">Password</label>
            <input className="input" type="password" id="password-input" title="Password" required />

            <button className="button" type="submit">Login</button>
        </form>

        <a onClick={handleRegisterClick} href="" className = "color-a">Register</a>
    </div>
}