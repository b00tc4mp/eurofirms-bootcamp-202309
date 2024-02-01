import React, { useState, useEffect } from 'react'
import { Container, Button } from '../library'
import logic from '../logic'

export default function Judges(props) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        logic.retrieveJudges((error, judges) => {
            if (error) {
                props.onError(error);
            } else {
                setUsers(judges);
            }
        });
    }, [props]);

    function handleEditUserClick() {
        props.navigate('/users/edit');
    }

    return (
        <Container className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-20" align="center" aria-label={props['aria-label']}>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Nombre de usuario</th>
                        <th>Rol</th>
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
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                                <td>
                                    <Button onClick={handleEditUserClick}>🖊</Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Container>
    )
}
