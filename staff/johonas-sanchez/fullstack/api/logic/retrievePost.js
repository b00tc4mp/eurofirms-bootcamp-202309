const { validate } = require("./helpers")
const { User, Post } = require("../data/models")
const { NotFoundError, SystemError } = require("./errors")

function retrievePost(userId, postId, callback) {
   validate.id(userId, "user id")
   validate.id(postId, "post id")
   validate.function(callback, "callback")

   User.findById(userId)
      .then((user) => {
         if (!user) {
            callback(new NotFoundError("user not found"))

            return
         }

         Post.findById(postId)
            .select("-__v")
            .populate("author", "name")
            .lean()
            .then((posts) => {
               posts.forEach((post) => {
                  post.id = post._id.toString()
                  delete post._id

                  if (post.author._id) {
                     post.author.id = post.author._id.toString()
                     delete post.author._id
                  }

                  post.likes = post.likes.map((userObjectId) => userObjectId.toString())

                  post.liked = post.likes.includes(userId)
               })

               callback(null, posts)
            })

            .catch((error) => callback(new SystemError(error.message)))
      })
      .catch((error) => callback(new SystemError(error.message)))
}

module.exports = retrievePost
