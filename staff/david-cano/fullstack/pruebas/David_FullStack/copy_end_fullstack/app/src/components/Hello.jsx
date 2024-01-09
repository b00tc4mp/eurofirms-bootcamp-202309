// Importar la función 'useParams' desde la biblioteca 'react-router-dom'
import { useParams } from 'react-router-dom'

// Definir el componente 'Hello' que se encarga de mostrar un saludo personalizado
export default function Hello() {
    // Obtener los parámetros de la URL utilizando la función 'useParams'
    const params = useParams()

    // Devolver un encabezado h1 con un fondo amarillo, un borde negro y un texto negro,
    // que muestra el saludo personalizado con el nombre obtenido de los parámetros de la URL
    return <h1 className="bg-yellow border-black border-w-2 text-black">Hello, {params.name}!</h1>
}
