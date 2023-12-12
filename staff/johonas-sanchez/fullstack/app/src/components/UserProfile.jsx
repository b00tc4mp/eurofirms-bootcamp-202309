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

    {view === 'change-password' && 
    <Container className="mt-7">
        <Form>
            <Field type="password" id="old-password" required>Old Password</Field>

            <Field type="password" id="new-password" required>New password</Field>

            <Field type="password" id="repeat-new-password" required>Repeat new password</Field>

            <Button type="submit">Actualizar</Button>
            <Button onClick={handleCancelClick}>Cancel</Button>
        </Form>
    </Container> }

    {view === 'change-email' && 
    <Container className="mt-7">
    <Form>
        <Field type="password" id="password" required>Password</Field>

        <Field type="email" id="old-email" required>Old email</Field>

        <Field type="email" id="new-email" required>New email</Field>

        <Field type="email" id="repeat-new-email" required>Repeat new email</Field>

        <Button type="submit">Actualizar</Button>
        <Button onClick={handleCancelClick}>Cancel</Button>
    </Form>
</Container> }

    </>
}

export default UserProfile