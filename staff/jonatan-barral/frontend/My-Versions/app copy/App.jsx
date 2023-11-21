function App() {
    const viewState = React.useState('login')
    const view = viewState[0]
    const setView = viewState[1]

    function handleShowRegister() {
        setView('register')
    }

    function handleShowLogin() {
        setView('login')
    }

    function handleShowHome() {
        setView('home')
    }

    return <>
        <Logo />

        {view === 'login' ? <Login onRegisterClick={handleShowRegister} onSuccess={handleShowHome} /> : null}

        {view === 'register' ? <Register onNavigateToLogin={handleShowLogin} /> : null}

        {view === 'home' ? <Home onLogout={handleShowLogin} /> : null}
    </>
}
