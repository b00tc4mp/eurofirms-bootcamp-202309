import { validate } from './helpers'
import context from './context'

function retrievePosts(callback) {
   validate.function(callback, 'callback')
   validate.jwt(context.jwt)

   const req = {
      method: 'GET',
      headers: {
         Authorization: `Bearer ${context.storage.token}`,
      },
   }

   fetch(`${import.meta.env.VITE_API_URL}/posts`, req)
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
