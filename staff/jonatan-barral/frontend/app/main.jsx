function Login() {
    return <div className="view view-skyblue">
        <h1>Login</h1>

        <form id="login-form" className="form">
            <label htmlFor="email-input">E-mail</label>
            <input type="email" id="email-input" title="E-mail"></input>

            <label htmlFor="password-input">Password</label>
            <input type="password" id="password-input" title="Password"></input>

            <button type="submit">Login</button>

        </form>

        <a id="register-link" href="">Register</a>
    </div>
}

function Register() {
    return <div id="register-view" className="view view-plum">
        <h1>Register</h1>

        <form id="register-form" className="form">
            <label htmlFor="name-input">Name</label>
            <input type="text" id="name-input" title="Name"></input>

            <label htmlFor="email-input">E-mail</label>
            <input type="email" id="email-input" title="E-mail"></input>

            <label htmlFor="password-input">Password</label>
            <input type="password" id="password-input" title="Password"></input>

            <button type="submit">Register</button>
        </form>

        <a id="login-link" href="">Login</a>
    </div>
}

function Home() {
    return <div id="home-view">
        <header className="header">
            <h1>Home</h1>
            <span id="user-name-span">Hello World</span>
            <button id="new-post-button" title="New post" aria-label="New post">+</button>
            <button id="logout-button">Logout</button>
        </header>


        <div id="new-post-panel" className="panel-lightgreen">
            <h2>Create post</h2>

            <form id="new-post-form" className="form">
                <label htmlFor="image-input">Image</label>
                <input type="url" id="image-input"></input>

                <label htmlFor="image-description-input">Image description</label>
                <input type="text" id="image-description-input"></input>

                <label htmlFor="text-input">Text</label>
                <input type="text" id="text-input"></input>

                <button type="submit">Post</button>
                <button id="cancel-new-post-button">Cancel</button>
            </form>
        </div>



        <div id="posts-list">
        </div>
    </div>

}

var root = ReactDOM.createRoot(document.getElementById('root'))
root.render([<Login />, <Register />, <Home />])