var loginView = <div className="view">
    <h1>Login</h1>

    <form id="login-form" className="form">
        <label className="label" htmlFor="email-input">E-mail</label>
        <input className="input" type="email" id="email-input" title="E-mail" required></input>

        <label className="label" htmlFor="password-input">Password</label>
        <input className="input" type="password" id="password-input" title="Password" required></input>

        <button className="button" type="submit">Login</button>
    </form>

    <a id="register-link" href="">Register</a>
</div>

var root = ReactDOM.createRoot(document.getElementById('root'))
root.render(loginView)