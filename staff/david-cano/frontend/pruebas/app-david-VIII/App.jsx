// Componente principal de la aplicación
function App() {
    // Estado para gestionar la vista actual de la aplicación
    const viewState = React.useState('login')
    // Extraer el valor de la vista y la función para actualizar la vista del estado
    const view = viewState[0]
    const setView = viewState[1]

    // Función para mostrar la vista de registro
    function handleShowRegister() {
        // Actualizar la vista a 'register' al hacer clic en el enlace de registro
        setView('register')
    }

    // Función para mostrar la vista de inicio de sesión
    function handleShowLogin() {
        // Actualizar la vista a 'login' al hacer clic en el enlace de inicio de sesión
        setView('login')
    }

    // Función para mostrar la vista principal (home)
    function handleShowHome() {
        // Actualizar la vista a 'home' al iniciar sesión correctamente
        setView('home')
    }

    // Renderizar el contenido de la aplicación
    return (
        <>
            {/* Componente de logo */}
            <Logo />

            {/* Condicionalmente mostrar la vista de inicio de sesión */}
            {view === 'login' ? <Login onRegisterClick={handleShowRegister} onLoggedIn={handleShowHome} /> : null}

            {/* Condicionalmente mostrar la vista de registro */}
            {view === 'register' ? <Register onNavigateToLogin={handleShowLogin} /> : null}

            {/* Condicionalmente mostrar la vista principal (home) */}
            {view === 'home' ? <Home onLogout={handleShowLogin} /> : null}
        </>
    );
}
