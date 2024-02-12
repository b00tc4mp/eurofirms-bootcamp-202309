function App() {
    //viewState, es el estado de lo que se ve 
    const viewState = React.useState('login')
    //siempre que se use viewState se esta usando una array. Este es el estado actual.
    const view = viewState[0]
    // en la posicion 1 tenemos una funtcion (setView) para cambiar ese estado
    const setView = viewState[1]


    function handleShowRegister() {
        setView("register")
    }

    function handleShowLogin() {
        setView("login")
    }

    return <>
        <Logo />

        {view === "login" ? <Login onRegisterClick={handleShowRegister} /> : null}

        {view === "register" ? <Register onLoginClick={handleShowLogin} /> : null}

        {view === "home" ? <Home /> : null}
    </>
}