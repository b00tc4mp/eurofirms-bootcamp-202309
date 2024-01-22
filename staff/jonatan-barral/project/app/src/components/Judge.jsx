import { Navigate } from 'react-router-dom'
import Button from '../library/Button'

import logic from '../logic'

export default function Judge(props) {
    console.log('Juez')

    const juez = props.juez

    function handleEditUserClick() {
        Navigate('/users/edit')
    }
    return
    <tr><td> {user.name}</td>
        <td>{user.username}</td>
        <td>{user.role}</td>
        <td>{user.status}</td>
        <td><Button onClick={handleEditUserClick}>🖊</Button></td>
    </tr>
