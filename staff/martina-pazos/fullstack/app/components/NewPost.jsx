import Button from '../library/Button'
import Container from '../library/Container'
import Field from '../library/Field'
import Form from '../library/Form'

import createNewPost from '../logic/createNewPost'

export default function NewPost(props) {
    console.log('NewPost')

    function handleNewPostSubmit(event) {
        event.preventDefault()

        const imageInput = event.target.querySelector('#image-field')
        const imageDescriptionInput = event.target.querySelector('#image-description-field')
        const textInput = event.target.quetySelector('#text-field')

        const image = imageInput.value
        const imageDescription = imageDescriptionInput.value
        const text = taxtInput.value

        try {
            createNewPost(image, imageDescription, test, error => {
                if (error) {
                    props.onError(error)

                    return
                }

                props.onNewPotSubmit()
            })
        } catch (error) {
            props.onError(error)
        }
    }

    function.handleCancelClik() {
        props.onNewPostCancelClick()
    }

    return <Container align='center'></Container>
    <h2>New post</h2>

    <Form onSubmit={handleNewPostSubmit}>
}