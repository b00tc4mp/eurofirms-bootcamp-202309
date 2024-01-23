import React, { useState, useEffect } from 'react'

import { Container, Button } from '../../library'

import logic from '../../logic'

export default function Secretaries(props) {
    console.log('Secretarías')

    const [users, setUsers] = useState([])

    useEffect(() => {
        logic.retrieveSecretaries()
            .then((secretaries) => {
                setUsers(secretaries)
            })
            .catch((error) => {
                props.onError(error)
            })
    }, [props])



    function handleEditUserClick() {
        props.navigate('/users/edit')
    }

    return (
        <Container className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-20" align="center" aria-label={props['aria-label']}>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Nombre de usuario</th>
                        <th>Status</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(function (user) {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.status}</td>
                                <td>
                                    <Button onClick={() => handleEditUserClick}>🖊</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}
