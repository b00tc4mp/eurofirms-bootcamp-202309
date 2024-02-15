function App() {
    //viewState, es el estado de lo que se ve 
    const viewState = React.useState('login')
    //siempre que se use viewState se esta usando una array. Este es el estado actual.
    const view = viewState[0]
    // en la posicion 1 tenemos una funtcion (setView) para cambiar ese estado
    const setView = viewState[1]


    function handleRegisteShow() {
        setView("register")
    }

    function handleLoginShow() {
        setView("login")
    }

    function handleHomeShow() {
        setView("home")
    }

    return <>
        <Logo />

        {view === "login" ? <Login onSuccess={handleHomeShow} onRegisterClick={handleRegisteShow} /> : null}

        {view === "register" ? <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} /> : null}

        {view === "home" ? <Home onLogout={handleLoginShow} /> : null}
    </>
}