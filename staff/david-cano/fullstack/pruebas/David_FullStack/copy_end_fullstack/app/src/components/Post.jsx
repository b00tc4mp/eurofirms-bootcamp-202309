// Importar el componente 'Button' desde la biblioteca de componentes personalizados
import Button from '../library/Button'

// Importar la lógica de la aplicación desde el archivo 'logic'
import logic from '../logic'

// Definir el componente funcional llamado 'Post'
export default function Post(props) {
    // Imprimir un mensaje en la consola cuando el componente se renderiza
    console.log('Post')

    // Extraer el objeto 'post' de las propiedades
    const post = props.post

    // Función que se ejecuta cuando el usuario hace clic en el botón de "Me gusta"
    function handleLikeClick() {
        try {
            // Utilizar la función 'toggleLikePost' de la lógica para cambiar el estado de "Me gusta" del post
            logic.toggleLikePost(post.id, error => {
                // Manejar errores, mostrando un mensaje de error si es necesario
                if (error) {
                    props.onError(error)
                    return
                }

                // Llamar a la función proporcionada por el padre cuando se ha cambiado el estado de "Me gusta" con éxito
                props.onLikeToggled()
            })
        } catch (error) {
            // Manejar errores generales, mostrando un mensaje de error si es necesario
            props.onError(error)
        }
    }

    // Función que se ejecuta cuando el usuario hace clic en el botón de "Eliminar"
    function handleDeleteClick() {
        // Mostrar un cuadro de confirmación para asegurarse de que el usuario realmente quiere eliminar el post
        const confirmed = window.confirm('Are you sure you want to delete post?')

        if (confirmed) {
            try {
                // Utilizar la función 'deletePost' de la lógica para eliminar el post
                logic.deletePost(post.id, error => {
                    // Manejar errores, mostrando un mensaje de error si es necesario
                    if (error) {
                        props.onError(error)
                        return
                    }

                    // Llamar a la función proporcionada por el padre cuando se ha eliminado el post con éxito
                    props.onDeleted()
                })
            } catch (error) {
                // Manejar errores generales, mostrando un mensaje de error si es necesario
                props.onError(error)
            }
        }
    }

    // Función que se ejecuta cuando el usuario hace clic en el botón de "Guardar"
    function handleSaveClick() {
        try {
            // Utilizar la función 'toggleSavePost' de la lógica para cambiar el estado de "Guardar" del post
            logic.toggleSavePost(post.id, error => {
                // Manejar errores, mostrando un mensaje de error si es necesario
                if (error) {
                    props.onError(error)
                    return
                }

                // Llamar a la función proporcionada por el padre cuando se ha cambiado el estado de "Guardar" con éxito
                props.onSaveToggled()
            })
        } catch (error) {
            // Manejar errores generales, mostrando un mensaje de error si es necesario
            props.onError(error)
        }
    }

    // Devolver el componente 'article' que representa un post con sus detalles y botones
    return <article className="flex flex-col p-[.5rem] hover:bg-[skyblue]">
        {/* Mostrar el nombre del autor del post */}
        <h3 className='self-start'>{post.author.name}</h3>

        {/* Mostrar la imagen del post con su descripción */}
        <img className="max-w-[300px]"
            src={post.image}
            alt={post.imageDescription}
            title={post.imageDescription} />

        {/* Mostrar el texto del post */}
        <p>{post.text}</p>

        {/* Mostrar botones para "Me gusta", "Guardar" y "Eliminar" dependiendo del estado y del autor del post */}
        <div className='flex'>
            {/* Botón de "Me gusta" */}
            <Button onClick={handleLikeClick} title={post.liked ? 'Unlike' : 'Like'} aria-label={post.liked ? 'Unlike' : 'Like'}>
                {/* Mostrar emoji y número de "Me gusta" */}
                {(post.liked ? '😍' : '😒') + ' ' + post.likes.length + ' likes'}
            </Button>

            {/* Botón de "Guardar" */}
            <Button onClick={handleSaveClick} title={post.liked ? 'Unsave' : 'Save'} aria-label={post.saved ? 'Unsave' : 'Save'}>
                {/* Mostrar emoji de estrella o copo de nieve dependiendo del estado de "Guardar" */}
                {(post.saved ? '⭐' : '✡️')}
            </Button>

            {/* Mostrar botón de "Eliminar" solo si el usuario es el autor del post */}
            {post.author.id === logic.getLoggedInUserId() ? <Button title="Delete" aria-label="Delete" onClick={handleDeleteClick}>🚮</Button> : null}
        </div>
    </article>
}
