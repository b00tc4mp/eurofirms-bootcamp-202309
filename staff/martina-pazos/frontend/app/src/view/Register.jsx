////esto es lo que aparece en el Register  de la APP. Aceptan entradas arbitrarias (llamadas "props") y devuelven elementos de React que describen lo que debería aparecer en la pantalla. Handle en inglés significa manejar.
import registerUser from "../logic/registerUser"


function Register(props) {
    function handleRegisterSubmit(event) {
        event.preventDefault()

        const nameInput = event.target.querySelector('#name-input')
        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value


        //La construcción try... catch permite manejar errores de tiempo de ejecución. Literalmente permite “intentar (try)” ejecutar el código y “atrapar (catch)” errores que pueden ocurrir en él.

        try {
            registerUser(name, email, password)

            props.onSuccess()
        } catch (error) {
            alert(error.message)
        }



    }

    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClick()
    }

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




        <a onClick={handleLoginClick} href="">Login</a>
    </div>
}

export default Register    