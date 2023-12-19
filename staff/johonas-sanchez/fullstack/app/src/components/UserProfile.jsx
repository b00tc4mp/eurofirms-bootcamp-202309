import { Routes, Route, useNavigate } from 'react-router-dom'

import UpdateEmail from './UpdateEmail'
import UpdatePassword from './UpdatePassword'

import Container from "../library/Container"
import Button from "../library/Button"


function UserProfile(props) {
   const navigate = useNavigate()

   function handleChangeEmailClick() {
      navigate('update-email')
   }

   function handleChangePasswordClick() {
      navigate('update-password')
   }


   return (
      <>
         <Container>
            <Button onClick={handleChangeEmailClick}>Change Email</Button>
            <Button onClick={handleChangePasswordClick}>Change Password</Button>
         </Container>

         <Routes>
            <Route path="/update-email" element={<UpdateEmail onError={props.onError} />} />
            <Route path="/update-password" element={<UpdatePassword onError={props.onError} />} />
        </Routes>

      </>
   )
}

export default UserProfile
