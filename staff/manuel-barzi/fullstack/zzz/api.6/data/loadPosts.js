const fs = require('fs')

function loadPosts(callback) {
    fs.readFile('./data/posts.json', function (error, content) {
        if (error) {
            callback(error)

            return
        }

        const data = content.toString()

        const posts = JSON.parse(data)

        callback(null, posts)
    })
}

module.exports = loadPosts