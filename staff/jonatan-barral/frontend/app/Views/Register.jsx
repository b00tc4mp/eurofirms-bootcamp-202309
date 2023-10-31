function Register(props) {
    function handleRegisterSubmit(event) {
        event.preventDefault()

        const nameInput = event.target.querySelector('#name-input')
        const emailInput = event.target.querySelector('#email-input')
        const passwordInput = event.target.querySelector('#password-input')

        const name = nameInput.value
        const email = emailInput.value
        const password = passwordInput.value

        console.log('TODO register', name, email, password)
    }

    function handleLoginClick(event) {
        event.preventDefault()

        props.onLoginClick()
    }


    return <div id="register-view" className="view view-plum">
        <h1>Register</h1>

        <form id="register-form" className="form" onSubmit={handleRegisterSubmit}>
            <label htmlFor="name-input">Name</label>
            <input type="text" id="name-input" title="Name"></input>

            <label htmlFor="email-input">E-mail</label>
            <input type="email" id="email-input" title="E-mail"></input>

            <label htmlFor="password-input">Password</label>
            <input type="password" id="password-input" title="Password"></input>

            <button type="submit">Register</button>
        </form>

        <a href="" onClick={handleLoginClick}>Login</a>
    </div>
}
