import { validateText, validateUrl, validateFunction } from '../utils/validators'


function createNewPost(userId, image, imageDescription, text, callback) {
    validateText(userId, "user id")
    validatePassword(password, "password")
    validatePassword(newPassword, "new password")
    validatePassword(repeatNewPassword, "repeat new password")
    validateFunction(callback, "callback")

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userId}`
        },
        body: JSON.stringify({ image, imageDescription, text })
    }
    
    fetch('http://localhost:4000/posts', req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => callback(new Error(body.error)))
                    .catch(error => callback(error))
    
                return
            }
    
            console.log(res.status, 'created')
            callback(null)
        })
        .catch(error => callback(error))
}

export default createNewPost