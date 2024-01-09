// Importar componentes y hooks necesarios de la biblioteca 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Importar componentes locales necesarios
import UpdateEmail from './UpdateEmail'
import UpdatePassword from './UpdatePassword'

// Importar el componente 'Button' desde la biblioteca de componentes personalizados
import Button from "../library/Button"

// Definir el componente funcional llamado 'Profile'
export default function Profile() {
    // Obtener la función 'navigate' de 'react-router-dom' para cambiar entre páginas
    const navigate = useNavigate()

    // Función para manejar el clic en el botón "Update e-mail"
    function handleUpdateEmailClick() {
        // Navegar a la ruta 'update-email' cuando se hace clic en el botón
        navigate('update-email')
    }

    // Función para manejar el clic en el botón "Update password"
    function handleUpdatePasswordClick() {
        // Navegar a la ruta 'update-password' cuando se hace clic en el botón
        navigate('update-password')
    }

    // Devolver un fragmento que contiene dos botones y las rutas correspondientes
    return <>
        {/* Botón para actualizar el correo electrónico */}
        <Button onClick={handleUpdateEmailClick}>Update e-mail</Button>
        
        {/* Botón para actualizar la contraseña */}
        <Button onClick={handleUpdatePasswordClick}>Update password</Button>

        {/* Definir las rutas correspondientes para los componentes 'UpdateEmail' y 'UpdatePassword' */}
        <Routes>
            <Route path="/update-email" element={<UpdateEmail />} />
            <Route path="/update-password" element={<UpdatePassword />} />
        </Routes>
    </>
}
