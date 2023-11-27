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

            Post.find({ author: user._id }).select('-__v -likes').lean()
                .then(posts => {
                    posts.forEach(post => {
                        post.id = post._id.toString()
                        delete post._id

                        post.author = {
                            id: user._id.toString(),
                            name: user.name 
                        };
                    })

                    if (posts.length === 0) {
                        callback(null, { message: 'You have not published any post yet' });
                    } 
                    else {
                        callback(null, posts);
                    }
                    
                })
        })
        .catch(error => console.error(error))
}
module.exports = retrieveMyPosts