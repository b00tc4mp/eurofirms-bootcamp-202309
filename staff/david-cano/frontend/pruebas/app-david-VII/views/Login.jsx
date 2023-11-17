function Login(props) {
    function handleLoginSubmit(event) {
        event.preventDefault()
        try{
        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const email = emailInput.value
        const password = passwordInput.value

        sessionUserId = authenticateUser(email, password)

        props.onLoggedIn()

       // console.log('TODO login', email, password)

        }catch (error){
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

            <button className="button" type="submit">Login</button>
        </form>

        <a onClick={handleRegisterClick} href="">Register</a>
    </div>
}