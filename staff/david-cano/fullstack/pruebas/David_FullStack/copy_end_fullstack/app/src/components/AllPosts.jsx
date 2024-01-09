// Importar el estado y el efecto desde React
import { useState, useEffect } from 'react'

// Importar el componente 'Posts' desde el archivo 'Posts'
import Posts from './Posts'

// Importar la lógica de la aplicación desde el archivo 'logic'
import logic from '../logic'

// Definir el componente 'AllPosts' que se encarga de mostrar todas las publicaciones
export default function AllPosts(props) {
    // Mostrar un mensaje en la consola para verificar que el componente se está renderizando
    console.log('AllPosts')

    // Definir el estado 'posts' y la función 'setPosts' para gestionar las publicaciones
    const [posts, setPosts] = useState([])

    // Usar el efecto para actualizar las publicaciones cuando cambia el 'timestamp' en las propiedades
    useEffect(() => {
        refreshPosts()
    }, [props.timestamp])

    // Función para obtener y actualizar las publicaciones desde la lógica de la aplicación
    function refreshPosts() {
        try {
            // Llamar a la función 'retrievePosts' de la lógica, que recibe un error y las publicaciones
            logic.retrievePosts((error, posts) => {
                // Manejar errores, mostrando el mensaje de error y deteniendo la ejecución si hay un error
                if (error) {
                    props.onError(error)
                    return
                }

                // Actualizar el estado 'posts' con las nuevas publicaciones obtenidas
                setPosts(posts)
            })
        } catch (error) {
            // Manejar errores capturados durante la ejecución de la función
            props.onError(error)
        }
    }

    // Función para manejar el evento de cambio de "Me gusta" en una publicación
    function handlePostLikeToggled() {
        // Actualizar las publicaciones llamando a la función 'refreshPosts'
        refreshPosts()
    }

    // Función para manejar el evento de eliminación de una publicación
    function handlePostDeleted() {
        // Actualizar las publicaciones llamando a la función 'refreshPosts'
        refreshPosts()
    }

    // Función para manejar el evento de cambio de estado de "Guardar" en una publicación
    function handlePostSaveToggled() {
        // Actualizar las publicaciones llamando a la función 'refreshPosts'
        refreshPosts()
    }

    // Renderizar el componente 'Posts' pasando las publicaciones y funciones de manejo de eventos como propiedades
    return <Posts posts={posts} onPostLikeToggled={handlePostLikeToggled} onPostSaveToggled={handlePostSaveToggled} onPostDeleted={handlePostDeleted} onError={props.onError} />
}
