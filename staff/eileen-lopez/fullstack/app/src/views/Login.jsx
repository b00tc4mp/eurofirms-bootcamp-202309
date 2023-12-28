import authenticateUser from "../logic/authenticateUser";
import Button from "../components/Button";
import Link from "../components/Link";

function Login(props) {
    console.log('Login')

    function handleLoginSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const email = emailInput.value
        const password = passwordInput.value

        try {
            window.sessionUserId = authenticateUser(email, password)

            props.onSuccess()
        } catch (error) {
            alert(error.message)
        }
    }

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

            {<button className="button" type="submit">Login</button>}
            <Button type="submit">Login</Button>
        </form>

        <Link onClick={handleRegisterClick}>Register</Link>
    </div>
}

export default Login