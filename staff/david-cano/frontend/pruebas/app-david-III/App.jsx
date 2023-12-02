function App(){
    // Utiliza el estado de React para controlar la vista actual, inicializado en 'login'.
    const viewState = React.useState('login')
    const view = viewState[0]// Obtiene la vista actual del estado.
    const setView = viewState[1]// Obtiene la función para cambiar la vista.

    // Función para cambiar la vista a 'register'.
    function handleShowRegister(){
        setView('register')
    }
 // Función para cambiar la vista a 'login'.
    function handleShowLogin(){
        setView('login')
    }
 // Función para cambiar la vista a 'home'.
    function handleShowHome(){
        setView('home')
    }
    
 // Renderiza el contenido principal de la aplicación.
    return<>
        <Logo />

        {view === 'login' ? <Login onRegisterClick={handleShowRegister}  onLoggedIn = {handleShowHome} /> : null}

        {view === 'register' ? <Register onNavigateToLogin = {handleShowLogin} /> : null}

        {view === 'home' ? <Home  onLogoutClick = {handleShowLogin} onPostClick = {handleShowHome} onLikeClick = {handleShowHome} /> : null}
    </>
}