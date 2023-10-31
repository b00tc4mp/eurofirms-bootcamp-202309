function Login() {
    function handleSubmit(event) {
        event.preventDefault()

        var emailInput = event.target.querySelector("#email, input")
        var passwordInput = event.target.querySelector('#password, input')

        var email = emailInput.value
        var password = passwordInput.value

        console.log(email, password)
    }

    return <div className="view">
        <h1>Login</h1>

        <form id="login-form" className="form" onSubmit={handleSubmit}>
            <label className="label" htmlFor="email-input">E-mail</label>
            <input className="input" type="email" id="email-input" title="E-mail" required>

                <label className="label" htmlFor="password-input">Password</label>
                <input className="input" type="password" id="password-input" title="Password" required>

                    <button className="button" type="submit" >Login</button>
                </form>

                <a id="register-link" href="">Register</a>
            </div>
}

