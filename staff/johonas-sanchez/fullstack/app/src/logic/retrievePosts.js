import { validateText, validateFunction } from '../utils/validators'

function retrievePosts(token, callback) {
   validateText(token, 'token')
   validateFunction(callback, 'callback')

   const req = {
      method: 'GET',
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }

   fetch("http://localhost:4000/posts", req)
      .then((res) => {
         if (!res.ok) {
            res.json()
               .then((body) => callback(new Error(body.error)))
               .catch((error) => callback(error))

            return
         }

         res.json()
            .then(posts => callback(null, posts.reverse()))
            .catch(error => callback(error))
      })
      .catch(error => callback(error))
}

export default retrievePosts
