import { validateText, validateUrl, validateFunction } from '../utils/validators'


function createNewPost(userId, image, imageDescription, text, callback) {
    validateText(userId, 'user id')
    validateUrl(image, 'image url')
    validateText(imageDescription, 'image description')
    validateText(text, 'text')
    validateFunction(callback, 'callback')

    const token = 'Bearer ' + sessionStorage.getItem('token') // Recuperamos el token (userId) del session storage

    const req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
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
        .catch(error => console.error(error))
}

export default createNewPost