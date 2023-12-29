import { Routes, Route, useNavigate } from 'react-router-dom'

import UpdateEmail from './UpdateEmail'

import UpdatePassword from './UpdatePassword'

import Button from '../library/Button'

export default function Profile() {
    const navigate = useNavigate()

    function handleUpdateEmailClick() {
        navigate('update-email')
    }

    function handleUpdatePasswordClick() {
        navigate('update-password')
    }

    return <>
        <Button onClick={handleUpdateEmailClick}>Update e-mail</Button>
        <Button onClick={handleUpdatePasswordClick}>Update password</Button>

        <Routes>
            <Route path="/update-email" element={<UpdateEmail />} />
            <Route path="/update-password" element={<UpdatePassword />} />
        </Routes>
    </>
}