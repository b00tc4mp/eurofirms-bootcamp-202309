// Importamos useEffect y useState del paquete 'react'
import { useEffect, useState } from 'react'
// Importamos Routes, Route y useNavigate de 'react-router-dom'
import { Routes, Route, useNavigate } from 'react-router-dom'

// Importamos la lógica de la aplicación desde el archivo 'logic'
import logic from '../logic'

// Importamos componentes y elementos de la biblioteca 'library' y otros componentes personalizados
import { Button, Link, Container } from '../library'
import { AllPosts, MyPosts, NewPost, SavedPosts, Logo, Profile } from '../components'

// Definimos el componente funcional Home que recibe las propiedades (props)
export default function Home(props) {
    // Imprimimos en la consola un mensaje indicando que estamos en el componente Home
    console.log('Home')

    // Definimos estados locales 'name' y 'timestamp' mediante el uso del hook useState
    const [name, setName] = useState(null)
    const [timestamp, setTimestamp] = useState(null)
    // Obtenemos la función 'navigate' desde el hook 'useNavigate'
    const navigate = useNavigate()

    // Definimos un efecto que se ejecutará solo una vez al cargar el componente
    useEffect(() => {
        // Imprimimos en la consola un mensaje indicando que estamos en el efecto del componente Home
        console.log('Home useEffect')

        // Intentamos obtener la información del usuario mediante la función 'retrieveUser' de la lógica
        try {
            // Llamamos a la función 'retrieveUser' que recibe una devolución de llamada (callback)
            logic.retrieveUser((error, user) => {
                // Verificamos si hay un error al obtener la información del usuario
                if (error) {
                    // Llamamos a la función 'onError' pasando el error como argumento
                    props.onError(error)

                    return
                }

                // Actualizamos el estado 'name' con el nombre del usuario obtenido
                setName(user.name)
            })
        } catch (error) {
            // Manejamos posibles errores y llamamos a la función 'onError' pasando el error como argumento
            props.onError(error)
        }
    }, []) // El segundo argumento es un array vacío, lo que indica que este efecto se ejecuta solo al montar el componente

    // Definimos funciones de manejo de eventos para diferentes acciones del usuario

    // Función para manejar el clic en el botón de 'Logout'
    function handleLogoutClick() {
        // Llamamos a la función 'logoutUser' de la lógica para cerrar sesión
        logic.logoutUser()
        // Llamamos a la función 'onLogout' pasando como argumento la acción de cierre de sesión
        props.onLogout()
    }

    // Función para manejar el clic en el botón de 'New post'
    function handleNewPostClick() {
        // Navegamos a la ruta '/new-post' utilizando la función 'navigate'
        navigate('/new-post')
    }

    // Función para manejar el clic en el botón de 'Cancel' al crear un nuevo post
    function handleNewPostCancelClick() {
        // Navegamos a la ruta '/' utilizando la función 'navigate'
        navigate('/')
    }

    // Función para manejar la presentación exitosa de un nuevo post
    function handleNewPostSubmit() {
        // Navegamos a la ruta '/' utilizando la función 'navigate'
        navigate('/')
        // Actualizamos el estado 'timestamp' con la marca de tiempo actual
        setTimestamp(Date.now())
    }

    // Funciones para manejar el clic en diferentes enlaces de navegación

    function handleSavedClick(event) {
        // Prevenimos el comportamiento predeterminado del enlace
        event.preventDefault()
        // Navegamos a la ruta '/saved' utilizando la función 'navigate'
        navigate('/saved')
    }

    function handleHomeClick(event) {
        event.preventDefault()
        navigate('/')
    }

    function handleMyPostsClick(event) {
        event.preventDefault()
        navigate('/my-posts')
    }

    function handleProfileClick(event) {
        event.preventDefault()
        navigate('/profile')
    }

    // Renderizamos la estructura del componente Home

    return (
        // Utilizamos el componente Container con la propiedad 'align' establecida en 'center'
        <Container align='center'>
            {/* Sección del encabezado */}
            <header className="flex justify-beetwen items-center md:min-w-[500px] lg:min-w-[1024px]" aria-label="Header">
                {/* Enlace con el logo, visible solo en pantallas grandes (lg y superior) */}
                <Link className='hidden lg:block' onClick={handleHomeClick}><Logo /></Link>
                {/* Botón para crear un nuevo post, visible solo en pantallas grandes (lg y superior) */}
                <Button className='hidden lg:block ml-3 px-2 bg-[blue] rounded-[5px] text-white' title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>+</Button>
                {/* Enlace para ver posts guardados */}
                <Link onClick={handleSavedClick}>Saved</Link>
                {/* Enlace para ver los posts del usuario */}
                <Link onClick={handleMyPostsClick}>My posts</Link>
                {/* Enlace para ver el perfil del usuario */}
                <Link onClick={handleProfileClick} aria-label="User name">{name}</Link>
                {/* Botón para cerrar sesión */}
                <Button onClick={handleLogoutClick}>Logout</Button>
            </header>

            {/* Sección del contenido, gestionada por React Router */}
            <Routes>
                {/* Ruta para crear un nuevo post */}
                <Route path="/new-post" element={<>
                    {/* Componente NewPost con funciones de devolución de llamada */}
                    <NewPost onNewPostSubmit={handleNewPostSubmit} onNewPostCancelClick={handleNewPostCancelClick} onError={props.onError} />
                    {/* Componente AllPosts con una marca de tiempo actualizada */}
                    <AllPosts timestamp={timestamp} onError={props.onError} />
                </>} />

                {/* Ruta por defecto, muestra todos los posts */}
                <Route path="/" element={<AllPosts timestamp={timestamp} onError={props.onError} />} />

                {/* Ruta para ver los posts guardados */}
                <Route path="/saved" element={<SavedPosts onError={props.onError} />} />

                {/* Ruta para ver los posts del usuario */}
                <Route path="/my-posts" element={<MyPosts onError={props.onError} />} />

                {/* Ruta para ver el perfil del usuario, gestionada por el componente Profile */}
                <Route path="/profile/*" element={<Profile />} />
            </Routes>

            {/* Espaciador en la parte inferior */}
            <div className='h-[2rem]'></div>

            {/* Sección del pie de página, visible solo en pantallas pequeñas (lg y inferior) */}
            <footer className='bg-[skyblue] fixed bottom-0 w-full flex justify-center items-center h-[2rem] lg:hidden'>
                {/* Enlace para volver a la página de inicio */}
                <Link onClick={handleHomeClick}><Logo /></Link>
                {/* Botón para crear un nuevo post, visible solo en pantallas pequeñas (lg y inferior) */}
                <Button title="New post" aria-label="New post (+)" onClick={handleNewPostClick}>+</Button>
            </footer>
        </Container>
    )
}
