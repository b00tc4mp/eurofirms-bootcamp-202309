import { Button, Container, Field, Label, Form } from '../../library'

import logic from '../../logic'

export default function CreateCompetition(props) {
    console.log('Create Competition')

    function handleCreateCompetitionSubmit(event) {
        event.preventDefault()

        const startdateInput = event.target.querySelector('#startdate-field')
        const enddateInput = event.target.querySelector('#enddate-field')
        const locationInput = event.target.querySelector('#location-field')

        const startdate = startdateInput.value
        const enddate = enddateInput.value
        const location = locationInput.value

        try {
            logic.createCompetition(startdate, enddate, location, error => {
                if (error) {
                    props.onError(error)

                    return
                }

                props.onCreateCompetitionSubmit()
            })
        } catch (error) {
            props.onError(error)
        }
    }

    function handleCancelClick() {
        props.onCreateCompetitionCancelClick()
    }

    return <Container align="center">
        <h2>Añade una competición</h2>

        <Form onSubmit={handleCreateCompetitionSubmit}>
            <Field type="date" id="startdate-field" required>Fecha de inicio</Field>

            <Field type="date" id="enddate-field" required>Fecha de finalización</Field>

            <Field type="text" id="location-field" required>Localización</Field>

            <Button type="submit">Crear</Button>
            <Button onClick={handleCancelClick}>Cancelar</Button>
        </Form>
    </Container>
}