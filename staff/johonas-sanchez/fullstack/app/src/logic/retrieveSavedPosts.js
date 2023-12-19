import validate from './validate'
import context from './context'

function retrieveSavedPosts(callback) {
    validate.funktion(callback, 'callback')
    validate.jwt(context.jwt)

    const req = {
        method: 'GET',
        headers: {
           Authorization: `Bearer ${context.storage.token}`,
        },
     }
     
     fetch('http://localhost:4000/posts/saved', req)
        .then(res => {
           if (!res.ok) {
              res.json()
                 .then(body => callback(new Error(body.error)))
                 .catch(error => callback(error))
     
              return
           }
     
           res.json()
              .then(posts => callback(null, posts.reverse()))
              .catch(error => callback(error))
        })
        .catch(error => callback(error))   
}

export default retrieveSavedPosts