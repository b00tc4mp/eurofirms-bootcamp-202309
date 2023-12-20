const { validate } = require('./helpers')

const { User, Post } = require('../data/models')

function retrievePosts(userId, callback) {
    validate.text(userId, 'user id')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }

            Post.find().select('-__v').populate('author', 'name').lean()
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post.id

                        if (post.author._id) {
                            post.author.id = post.author._id.toString()
                            delete post.author._id
                        }

                        post.likes = post.likes(userObjectId => userObjectId.toString())

                        post.liked = post.likes.includes(userId)

                        post.saved = user.saved.some(postObjectId => postObjectId.toString() === post.id)
                    })
                    callback(null, posts)
                })
        })
        .catch(error => console.log(error))
}
module.exports = retrievePosts