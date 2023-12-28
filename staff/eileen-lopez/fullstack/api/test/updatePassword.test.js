const req = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer '
    },
    body: JSON.stringify({ password: '123123123', newPassword: '123456789', repeatNewPassword: '123456789'})
}