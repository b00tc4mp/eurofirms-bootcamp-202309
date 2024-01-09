// Importar componentes de la biblioteca de componentes personalizados
import Button from '../library/Button'
import Container from '../library/Container'
import Field from '../library/Field'
import Form from '../library/Form'

// Importar la lógica de la aplicación desde el archivo 'logic'
import logic from '../logic'

// Definir el componente funcional llamado 'NewPost'
export default function NewPost(props) {
    // Imprimir un mensaje en la consola cuando el componente se renderiza
    console.log('NewPost')

    // Función que se ejecuta cuando el usuario envía el formulario para crear un nuevo post
    function handleNewPostSubmit(event) {
        // Evitar que la página se recargue al enviar el formulario
        event.preventDefault()

        // Obtener referencias a los campos de entrada en el formulario
        const imageInput = event.target.querySelector('#image-field')
        const imageDescriptionInput = event.target.querySelector('#image-description-field')
        const textInput = event.target.querySelector('#text-field')

        // Obtener los valores ingresados por el usuario en los campos de entrada
        const image = imageInput.value
        const imageDescription = imageDescriptionInput.value
        const text = textInput.value

        try {
            // Utilizar la función 'createNewPost' de la lógica para crear un nuevo post
            logic.createNewPost(image, imageDescription, text, error => {
                // Manejar errores, mostrando un mensaje de error si es necesario
                if (error) {
                    props.onError(error)
                    return
                }

                // Llamar a la función proporcionada por el padre cuando se ha enviado el nuevo post con éxito
                props.onNewPostSubmit()
            })
        } catch (error) {
            // Manejar errores generales, mostrando un mensaje de error si es necesario
            props.onError(error)
        }
    }

    // Función que se ejecuta cuando el usuario hace clic en el botón de cancelar
    function handleCancelClick() {
        // Llamar a la función proporcionada por el padre cuando se hace clic en el botón de cancelar
        props.onNewPostCancelClick()
    }

    // Devolver el componente 'Container' con contenido para crear un nuevo post
    return <Container align="center">
        <h2>New post</h2>

        {/* Formulario que llama a la función 'handleNewPostSubmit' cuando se envía */}
        <Form onSubmit={handleNewPostSubmit}>
            {/* Campo de entrada para la URL de la imagen */}
            <Field type="url" id="image-field" required>Image</Field>

            {/* Campo de entrada para la descripción de la imagen */}
            <Field type="text" id="image-description-field" required>Image description</Field>

            {/* Campo de entrada para el texto del post */}
            <Field type="text" id="text-field" required>Text</Field>

            {/* Botón de tipo 'submit' para enviar el formulario */}
            <Button type="submit">Post</Button>

            {/* Botón que llama a la función 'handleCancelClick' cuando se hace clic */}
            <Button onClick={handleCancelClick}>Cancel</Button>
        </Form>
    </Container>
}
