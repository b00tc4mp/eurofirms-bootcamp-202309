// Importar el hook 'useState' y 'useEffect' de la biblioteca 'react'
import { useState, useEffect } from 'react'

// Importar las funciones y lógica necesarias desde el módulo 'logic'
import logic from '../logic'

// Importar el componente 'Posts' desde el archivo correspondiente
import Posts from './Posts'

// Definir el componente funcional llamado 'SavedPosts'
export default function SavedPosts(props) {
    // Estado local para almacenar la lista de posts guardados
    const [posts, setPosts] = useState([])

    // Efecto secundario que se ejecuta después de que el componente se monta
    useEffect(() => {
        // Llamar a la función 'refreshPosts' para obtener y actualizar la lista de posts guardados
        refreshPosts()
    }, [])

    // Función para actualizar la lista de posts guardados
    function refreshPosts() {
        try {
            // Llamar a la función 'retrieveSavedPosts' de 'logic' para obtener los posts guardados
            logic.retrieveSavedPosts((error, posts) => {
                if (error) {
                    // Manejar errores y notificar al componente padre si ocurre alguno
                    props.onError(error)
                    return
                }

                // Actualizar el estado local 'posts' con la lista de posts guardados
                setPosts(posts)
            })
        } catch (error) {
            // Manejar errores y notificar al componente padre si ocurre alguno
            props.onError(error)
        }
    }

    // Función para manejar el evento cuando se da clic en el botón de "Me gusta" en un post
    function handlePostLikeToggled() {
        // Actualizar la lista de posts después de que se cambia el estado de "Me gusta"
        refreshPosts()
    }

    // Función para manejar el evento cuando se elimina un post
    function handlePostDeleted() {
        // Actualizar la lista de posts después de que se elimina un post
        refreshPosts()
    }

    // Función para manejar el evento cuando se cambia el estado de guardar un post
    function handlePostSaveToggled() {
        // Actualizar la lista de posts después de que se cambia el estado de guardar un post
        refreshPosts()
    }

    // Renderizar el componente 'Posts' con los posts guardados y las funciones de manejo de eventos
    return <Posts posts={posts} onPostLikeToggled={handlePostLikeToggled} onPostSaveToggled={handlePostSaveToggled} onPostDeleted={handlePostDeleted} onError={props.onError} />
}
