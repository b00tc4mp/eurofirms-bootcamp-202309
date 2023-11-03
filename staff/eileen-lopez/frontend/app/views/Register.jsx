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

        props.onNavigateToLogin()
    }

    return <div className="view">
        <h1>Register</h1>

        <form className="form" onSubmit={handleRegisterSubmit}>
            <label className="label" htmlFor="name-input">Name</label>
            <input className="input" type="text" id="name-input" title="Name" required></input>

            <label className="label" htmlFor="email-input">E-mail</label>
            <input className="input" type="email" id="email-input" title="E-mail" required></input>

            <label className="label" htmlFor="password-input">Password</label>
            <input className="input" type="password" id="password-input" title="Password" required></input>

            <button className="button" type="submit">Register</button>
        </form>

        <a onClick={handleLoginClick} href="">Login</a>
    </div>
}