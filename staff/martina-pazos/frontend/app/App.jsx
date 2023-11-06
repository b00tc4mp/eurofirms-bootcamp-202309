
// esta parte maneja toda la app

function App() {
    console.log('App')

    const viewState = React.useState('login')
    const view = viewState[0]
    const setView = viewState[1]

    function handleRegisterShow() {
        setView('register')
    }

    function handleLoginShow() {
        setView('login')
    }

    function handleHomeShow() {
        setView('home')
    }



    // no entiendo las funciones de view
    return <>



        {view === 'login' ? <Login onSuccess={handleHomeShow} onRegisterClick={handleRegisterShow} /> : null}

        {view === 'register' ? <Register onSuccess={handleLoginShow} onLoginClick={handleLoginShow} /> : null}

        {view === 'home' ? <Home onLogout={handleLoginShow} /> : null}
    </>
}