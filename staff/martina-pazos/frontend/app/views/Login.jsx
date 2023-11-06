////esto es lo que aparece en el Login  de la APP. Aceptan entradas arbitrarias (llamadas "props") y devuelven elementos de React que describen lo que debería aparecer en la pantalla. Handle en inglés significa manejar.
//El método map() es un método iterativo.Llama a una función callbackFn proporcionada una vez para cada elemento de una matriz y construye una nueva matriz a partir de los resultados. Recordemos el includes:El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.



function Login(props) {
    function handleLoginSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const email = emailInput.value
        const password = passwordInput.value

        //La construcción try... catch permite manejar errores de tiempo de ejecución.Literalmente permite “intentar(try)” ejecutar el código y “atrapar(catch)” errores que pueden ocurrir en él.


        try {
            authenticateUser(email, password)

            loggedInEmail = email

            props.onSuccess()
        } catch (error) {
            alert(error.message)
        }
    }

    //onSuccess(en éxito)

    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClick()
    }

    return <div className="view">
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
}

// revisada hasta 9/11