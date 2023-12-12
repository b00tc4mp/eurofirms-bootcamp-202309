import { validateText, validateFunction } from '../utils/validators'

function retrieveSavedPosts(userId, callback) {
    validateText(userId, 'user id')
    validateFunction(callback, 'callback')
    const req = {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${userId}`,
        },
    }

    fetch('http://localhost:4000/posts/saved', req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => console.error(body))
                    .catch(error => console.error(error))

                return
            }

            res.json()
                .then(posts => console.log(res.status, posts))
                .catch(error => console.error(error))
        })
        .catch(error => console.error(error))

}
export default retrieveSavedPosts