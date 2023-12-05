import registerUser from '../logic/registerUser'

import Button from '../components/Button'
import Link from '../components/Link'
import Input from '../components/Input'
import Label from '../components/Label'

import Logo from '../components/Logo'

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
        <Logo />

        <h1>Register</h1>

        <form className="form" onSubmit={handleRegisterSubmit}>
            <Label htmlFor="name-input">Name</Label>
            <Input type="text" id="name-input" title="Name" required />

            <Label htmlFor="email-input">E-mail</Label>
            <Input type="email" id="email-input" title="E-mail" required />

            <Label htmlFor="password-input">Password</Label>
            <Input type="password" id="password-input" title="Password" required />

            <Button type="submit">Register</Button>
        </form>

        <Link onClick={handleLoginClick}>Login</Link>
    </div>
}

export default Register