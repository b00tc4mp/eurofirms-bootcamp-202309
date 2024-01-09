// Importar las funciones 'useEffect' y 'useState' de React para manejar efectos secundarios y el estado en el componente
import { useEffect, useState } from 'react'

// Importar el componente 'Posts' desde el archivo correspondiente
import Posts from './Posts'

// Importar la lógica de la aplicación desde el archivo 'logic'
import logic from '../logic'

// Definir el componente funcional llamado 'MyPosts'
export default function MyPosts(props) {
    // Imprimir un mensaje en la consola cuando el componente se renderiza
    console.log('MyPosts')

    // Definir el estado 'posts' utilizando el hook 'useState', inicializado como un array vacío
    const [posts, setPosts] = useState([])

    // Definir un efecto que se ejecuta después de la renderización inicial del componente
    useEffect(() => {
        // Llamar a la función 'refreshPosts' para obtener y mostrar los posts del usuario
        refreshPosts()
    }, [])

    // Función que se encarga de obtener y actualizar los posts del usuario
    function refreshPosts() {
        try {
            // Utilizar la función 'retrieveMyPosts' de la lógica para obtener los posts del usuario
            logic.retrieveMyPosts((error, posts) => {
                // Manejar errores, mostrando un mensaje de error si es necesario
                if (error) {
                    props.onError(error)
                    return
                }

                // Actualizar el estado 'posts' con los posts obtenidos
                setPosts(posts)
            })
        } catch (error) {
            // Manejar errores generales, mostrando un mensaje de error si es necesario
            props.onError(error)
        }
    }

    // Función que se ejecuta cuando el usuario da like a un post, actualizando los posts
    function handlePostLikeToggled() {
        refreshPosts()
    }

    // Función que se ejecuta cuando el usuario elimina un post, actualizando los posts
    function handlePostDeleted() {
        refreshPosts()
    }

    // Función que se ejecuta cuando el usuario guarda o desguarda un post, actualizando los posts
    function handlePostSaveToggled() {
        refreshPosts()
    }

    // Devolver el componente 'Posts', pasando los posts y las funciones de manejo de eventos como props
    return <Posts posts={posts} onPostLikeToggled={handlePostLikeToggled} onPostSaveToggled={handlePostSaveToggled} onPostDeleted={handlePostDeleted} onError={props.onError} />
}
