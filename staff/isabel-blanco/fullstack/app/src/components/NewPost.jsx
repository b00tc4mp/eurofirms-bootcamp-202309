import Button from '../library/Button'
import Container from '../library/Container'
import Field from '../library/Field'
import Form from '../library/Form'

import logic from '../logic'

export default function NewPost(props) {
    console.log('NewPost')

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-field')
        const imageDescriptionInput = event.target.querySelector('#image-description-field')
        const textInput = event.target.querySelector('#text-field')

        const image = imageInput.value
        const text = textInput.value
        const imageDescription = imageDescriptionInput.value

        try {
            logic.createNewPost(image, imageDescription, text, error => {
                if (error) {
                    props.onError(error)

                    return
                }

                props.onNewPostSubmit()
            })
        } catch (error) {
            props.onError(error)
        }
    }

    function handleCancelClick() {
        props.onNewPostCancelClick()
    }

    return <Container align="center">
        <h2>New post</h2>

        <Form onSubmit={handleNewPostSubmit}>
            <Field type="url" id="image-field" required>Image</Field>

            <Field type="text" id="image-description-field" required>Image description</Field>

            <Field type="text" id="text-field" required>Text</Field>

            <Button type="submit">Post</Button>
            <Button onClick={handleCancelClick}>Cancel</Button>
        </Form>
    </Container>
}