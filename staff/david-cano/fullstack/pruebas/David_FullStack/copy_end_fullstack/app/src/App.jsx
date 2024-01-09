// Importamos el hook useState de React para gestionar el estado del componente funcional
import { useState } from 'react'
// Importamos componentes y funciones necesarios de React Router
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'

// Importamos el componente Feedback que proporciona retroalimentación al usuario
import Feedback from './library/Feedback'

// Importamos los componentes de las páginas y lógica de la aplicación
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

// Importamos el componente Hello
import Hello from './components/Hello'

// Importamos la lógica de la aplicación
import logic from './logic'
// Importamos los errores específicos de la lógica de la aplicación
import { CredentialsError, JWTError, SystemError } from './logic/errors'

// Definimos el componente principal de la aplicación
export default function App() {
    // Estado local para gestionar los mensajes de retroalimentación al usuario
    const [feedback, setFeedback] = useState(null)
    // Hook de navegación proporcionado por React Router
    const navigate = useNavigate()

    // Función que muestra la página de registro
    function handleShowRegister() {
        navigate('/register')
        setFeedback(null)
    }

    // Función que muestra la página de inicio de sesión
    function handleShowLogin() {
        navigate('/login')
        setFeedback(null)
    }

    // Función que muestra la página principal
    function handleShowHome() {
        navigate('/')
        setFeedback(null)
    }

    // Función que maneja los errores generados por la lógica de la aplicación
    function handleError(error) {
        // Si el error es de tipo JWTError, el token ha expirado y se debe cerrar la sesión
        if (error instanceof JWTError) {
            logic.logoutUser()
            // Redirigir a la página de inicio de sesión y mostrar un mensaje de sesión expirada
            navigate('/login')
            setFeedback('SESSION IS EXPIRED!!!; please "LOGIN" again')
        } 
        // Si el error es de tipo CredentialsError, se informa al usuario que las credenciales son incorrectas
        else if (error instanceof CredentialsError) {
            setFeedback('Wrong credentials, try again')
        } 
        // Si el error es de tipo SystemError, se muestra un mensaje genérico de error al usuario
        else if (error instanceof SystemError) {
            setFeedback('Something went wrong. Please, try again later')
        }
        // Para otros tipos de errores, se muestra el mensaje de error correspondiente
        else setFeedback(error.message)
    }

    // Función que maneja la aceptación del mensaje de retroalimentación
    function handleAcceptFeedback() {
        setFeedback(null)
    }

    // Devolvemos la estructura de la aplicación con las rutas y manejo de retroalimentación
    return <>
        {/* Configuramos las rutas de la aplicación */}
        <Routes>
            {/* Ruta para la página de inicio de sesión */}
            <Route path="/login" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Login onSuccess={handleShowHome} onRegisterClick={handleShowRegister} onError={handleError} />} />
            
            {/* Ruta para la página de registro */}
            <Route path="/register" element={logic.isUserLoggedIn() ? <Navigate to="/" /> : <Register onSuccess={handleShowLogin} onLoginClick={handleShowLogin} onError={handleError} />} />

            {/* Ruta para la página principal (Home) */}
            <Route path="/*" element={logic.isUserLoggedIn() ? <Home onLogout={handleShowLogin} onError={handleError} /> : <Navigate to="/login" />} />

            {/* Ruta para el componente Hello con un parámetro de nombre */}
            <Route path="/hello/:name" element={<Hello />} />
        </Routes>

        {/* Mostramos el componente Feedback si hay un mensaje */}
        {feedback ? <Feedback message={feedback} onAccept={handleAcceptFeedback} /> : null}
    </>
}
