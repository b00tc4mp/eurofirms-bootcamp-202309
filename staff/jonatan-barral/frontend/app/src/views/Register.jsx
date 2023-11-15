import registerUser from '../logic/registerUser'
import Button from '../Components/Button'
import Link from '../Components/Link'

function Register(props) {

    function handleRegisterSubmit(event) {
        event.preventDefault()

        const nameInput = event.target.querySelector('#name-input')
        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

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

    return <div id="register-view" className="view view-plum">
        <h1>Register</h1>

        <form id="register-form" className="form" onSubmit={handleRegisterSubmit}>
            <label htmlFor="name-input">Name</label>
            <input type="text" id="name-input" title="Name" />

            <label htmlFor="email-input">E-mail</label>
            <input type="email" id="email-input" title="E-mail" />

            <label htmlFor="password-input">Password</label>
            <input type="password" id="password-input" title="Password" />

            <Button type="submit">Register</Button>
        </form>

        <Link onClick={handleLoginClick}>Login</Link>
    </div>
}

export default Register