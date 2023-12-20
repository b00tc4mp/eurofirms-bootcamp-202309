const validate = require('./helpers/validate')

const { User, Post } = require('../data/models')

function retrievePost(userId, postId, callback) {
    validate.text(userId, 'user id')
    validate.text(postId, 'post id')
    validate.function(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }

            Post.findById(postId).select('-__v').populate('author', 'name').lean()
            .then(posts => {
                posts.forEach(post => {
                    post.id = post._id.toString()
                    delete post._id

                    if (post.author._id) {
                        post.author.id = post.author._id.toString()
                        delete post.author._id
                    }

                    post.likes = post.likes.map(userObjectId => userObjectId.toString())

                    post.liked = post.likes.includes(userId)
                })

                callback(null, posts)
            })
            
                .catch(error => callback(error))
        })
        .catch(error => callback(error))
    }

module.exports = retrievePost