import { validateText } from "../utils/validators"

function deletePost(userId, postId) {
    validateText(userId, 'user id')
    validateText(postId, 'post id')

    const req = {
        method: 'DELETE',
        headers: {
            Authorization: 'Bearer userId',
        },
    }

    fetch('http://localhost:4000/posts/postId', req)
        .then(res => {
            if (!res.ok) {
                res.json()
                    .then(body => console.error(body))
                    .catch(error => console.error(error))

                return
            }

            console.log(res.status, 'deleted')
        })
        .catch(error => console.error(error))
}

export default deletePost