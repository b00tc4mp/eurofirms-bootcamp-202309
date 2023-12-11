import { useState } from 'react'

import Container from '../components/Container'
import Field from '../components/Field'
import Form from '../components/Form'
import Button from '../components/Button'

function UserProfile() {
const [view,setView] = useState( null )

function handleChangeEmailClick() {
    setView('change-email')
}

function handleChangePasswordClick() {
    setView('change-password')
}

function handleCancelClick() {
    setView(null)
}

return<><Container>
    <Button onClick={handleChangeEmailClick}>Change Email</Button>
    <Button onClick={handleChangePasswordClick}>Change Password</Button>
    </Container>

    {view === 'change-email' && 
    <Container>
        <Form>
            <Field>1</Field>
            <Field></Field>
            <Field></Field>
            <Button>Enviar</Button>
            <Button onClick={handleCancelClick}>Cancelar</Button>
        </Form>
    </Container> }

    {view === 'change-password' && 
    <Container>
        <Form>
            <Field>2</Field>
            <Field></Field>
            <Field></Field>
            <Button>Enviar</Button>
            <Button onClick={handleCancelClick}>Cancelar</Button>
        </Form>
    </Container> }

    </>
}

export default UserProfile