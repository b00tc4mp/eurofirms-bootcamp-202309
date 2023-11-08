function App() {
    // Definir un estado para controlar la vista actual
    const viewState = React.useState('login');
    const view = viewState[0];
    const setView = viewState[1];

    // Función para mostrar la página de registro
    function handleShowRegister() {
        setView('register');
    }

    // Función para mostrar la página de inicio de sesión
    function handleShowLogin() {
        setView('login');
    }

    // Función para mostrar la página de inicio (Home)
    function handleShowHome() {
        setView('home');
    }

    return (
        <>
            <Logo />

            {/* Mostrar la página de inicio de sesión (Login) si la vista actual es 'login' */}
            {view === 'login' ? <Login onRegisterClick={handleShowRegister} onLoggedIn={handleShowHome} /> : null}

            {/* Mostrar la página de registro (Register) si la vista actual es 'register' */}
            {view === 'register' ? <Register onNavigateToLogin={handleShowLogin} /> : null}

            {/* Mostrar la página de inicio (Home) si la vista actual es 'home' */}
            {view === 'home' ? <Home onLogout={handleShowLogin} /> : null}
        </>
    );
}
