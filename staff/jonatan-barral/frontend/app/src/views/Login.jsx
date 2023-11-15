import authenticateUser from '../logic/authenticateUser'
import Link from '../Components/Link'
import Button from '../Components/Button'

function Login(props) {

    function handleLoginSubmit(event) {
        event.preventDefault()

        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const email = emailInput.value
        const password = passwordInput.value

        try {
            sessionUserId = authenticateUser(email, password)

            props.onSuccess()
        } catch (error) {
            alert(error.message)
        }
    }

    function handleRegisterClick(event) {
        event.preventDefault()

        props.onRegisterClick()
    }

    return <div className="view view-skyblue">
        <h1>Login</h1>

        <form id="login-form" className="form" onSubmit={handleLoginSubmit}>
            <label htmlFor="email-input">E-mail</label>
            <input type="email" id="email-input" title="E-mail"></input>

            <label htmlFor="password-input">Password</label>
            <input type="password" id="password-input" title="Password"></input>

            <Button type="submit">Login</Button>

        </form>

        <Link onClick={handleRegisterClick}>Register</Link>
    </div>
}

export default Login