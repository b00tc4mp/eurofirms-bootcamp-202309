import authenticateUser from '../logic/authenticateUser'

import Button from '../components/Button'
import Link from '../components/Link'
import Input from '../components/Input'
import Label from '../components/Label'

import Logo from '../components/Logo'

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
        <Logo />

        <h1>Login</h1>

        <form className="form" onSubmit={handleLoginSubmit}>
            <Label htmlFor="email-input">E-mail</Label>
            <Input type="email" id="email-input" title="E-mail" required />

            <Label htmlFor="password-input">Password</Label>
            <Input type="password" id="password-input" title="Password" required />

            {/* <button className="button" type="submit">Login</button> */}
            <Button type="submit">Login</Button>
        </form>

        <Link onClick={handleRegisterClick}>Register</Link>
    </div>
}

export default Login