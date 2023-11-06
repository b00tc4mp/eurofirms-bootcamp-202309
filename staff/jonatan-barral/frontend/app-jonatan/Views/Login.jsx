function Login(props) {
    function handleLoginSubmit(event) {
        event.preventDefault()

        try {
            const emailInput = event.target.querySelector('#email-input')
            const passwordInput = event.target.querySelector('#password-input')

            const email = emailInput.value
            const password = passwordInput.value

            authenticateUser(email, password)
            loggedInEmail = email
            props.onLoggedIn()
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

            <button type="submit">Login</button>

        </form>

        <a href="" onClick={handleRegisterClick}>Register</a>
    </div>
}
