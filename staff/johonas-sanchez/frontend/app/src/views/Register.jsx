import registerUser from '../logic/registerUser';

import Button from '../components/Button';
import Link from '../components/Link';

function Register(props) {
    console.log('Register')

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

    return <div className="view">
        <h1>Register</h1>

        <form className="form" onSubmit={handleRegisterSubmit}>
            <label className="label" htmlFor="name-input">Name</label>
            <input className="input" type="text" id="name-input" title="Name" required />

            <label className="label" htmlFor="email-input">E-mail</label>
            <input className="input" type="email" id="email-input" title="E-mail" required />

            <label className="label" htmlFor="password-input">Password</label>
            <input className="input" type="password" id="password-input" title="Password" required />

            <Button type="submit">Register</Button>
        </form>

        <Link onClick={handleLoginClick} href="">Login</Link>
    </div>
}

export default Register;