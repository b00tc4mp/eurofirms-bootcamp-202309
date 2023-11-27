const { validateText, validateFunction } = require('./helpers/validators')

const { User, Post } = require('../data/models')

function retrieveMyPosts(userId, callback) {
    validateText(userId, 'userId')
    validateFunction(callback, 'callback')

    User.findById(userId)
        .then(user => {
            if (!user) {
                callback(new Error('user not found'))

                return
            }

            Post.find({ author: userId }).select('-__v -likes').lean()
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post._id

                        post.author = {
                            id: user._id.toString(),
                            name: user.name 
                        };
                    })

                    callback(null, posts)

                })
        })
        .catch(error => console.error(error))
}
module.exports = retrieveMyPosts