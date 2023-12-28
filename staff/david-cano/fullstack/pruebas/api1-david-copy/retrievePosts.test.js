const retrievePosts = require('./retrievePosts')

retrievePosts('46lhfnkefx00', function (error, posts) {
    if (error) {
        console.error(error)

        return
    }

    console.table(posts)
})