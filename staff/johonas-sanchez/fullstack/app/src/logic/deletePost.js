import { validateText, validateFunction } from '../utils/validators'

function deletePost(token, postId, callback) {
    validateText(token, 'token')
    validateText(postId, 'post id')
    validateFunction(callback, 'callback')

    const req = {
        method: 'DELETE',
        headers: {
           Authorization: `Bearer ${token}`,
        },
     }
     
     fetch(`http://localhost:4000/posts/${postId}`, req)
        .then(res => {
           if (!res.ok) {
              res.json()
                 .then(body => callback(new Error(body.error)))
                 .catch(error => callback(error))
     
              return
           }
    
           callback(null)
        })
        .catch(error => callback(error))
}

export default deletePost