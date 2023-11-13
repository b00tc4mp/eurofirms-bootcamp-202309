function generateId() {
    return Math.floor((Math.random() * 1000000000000000000)).toString(36)
}

function User(id, name, email, password, saved) {
    this.id = id
    this.name = name,
    this.email = email
    this.password = password
    this.saved = saved
}

function Post(id, author, image, imageDescription, text, likes) {
    this.id = id
    this.author = author
    this.image = image
    this.imageDescription = imageDescription
    this.text = text
    this.likes = likes

}

function cloneUser(user) {
    return new User(user.id, user.name, user.email, user.password, [...user.saved])
}

function clonePost(post) {
    return new Post(post.id, post.author, post.image, post.imageDescription, post.text, [...post.likes])
}

const db = {
    users: [],
    posts: [],

    findUserByEmail: function (email) {
        const user = this.users.find(function (user) {
            return user.email === email
        })

        if (!user) return null
        return cloneUser(user)
    },

    createUser: function (name, email, password) {
        const user = new User(generateId(), name, email, password, [])
        this.users.push(user)
    },

    findUserById: function (id) {
        const user = this.users.find(function(user) {
            return user.id === id
        })

        if (!user) return null

        return cloneUser(user)
    },

    updateUser: function (user) {
        const userId = user.id

        const userIndex = this.users.findIndex(function(user) {
            return user.id === userId
        })

        if (userIndex < 0)
            throw new Error ('user not found')

        this.users[userIndex] = cloneUser(user)
    },

    getUsers: function() {
        return this.users.map(function (user) {
            return cloneUser(user)
        })
    },

    getPosts: function () {
        return this.posts.map(function (post) {
            return clonePost(post)
        })
    },

    createPost: function (userId, image, imageDescription, text) {
        const post = new Post(generateId(), userId, image, imageDescription, text, [])
        this.posts.push(post)
    },

    findPostById: function (id) {
        const post = this.posts.find(function (post) {
            return post.id === id
        })

        if (!post) return null
        return clonePost(post)
    },

    updatePost: function (post) {
        const postId = post.id

        const postIndex = this.posts.findIndex(function (post) {
            return post.id === postId
        })
    if (postIndex < 0)
        throw new Error ('post not found')

        this.posts[postIndex] = clonePost(post)
    },

    removePostById: function (id) {
        const postIndex = this.posts.findIndex(function (post) {
            return post.id === id
        })

        if (postIndex < 0)
            throw new Error('post not found')

        this.posts.splice(postIndex, 1)
    }
}


db.users [0] = new User(generateId(), 'Jvne', 'pepito@grillo.com', '123123123', [])

db.users [1] = new User(generateId(), 'Campa Nilla', 'campa@nilla.com', '123123123', [])

db.posts [0] = new Post(generateId(), db.users [0].id,'https://pbs.twimg.com/media/F9RyT68XgAAuJW0?format=jpg&name=large', 'Smile image', 'Smile!', [])

db.posts [1] = new Post(generateId(), db.users[1].id, 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-1240w/public/sites/nbcutelemundo/files/images/article/2014/08/28/hello_kitty_140920568644_4.jpg', 'Hello Kitty image', 'Hello, Kitty!', [])

db.posts [2] = new Post(generateId(), db.users[1].id, 'https://m.media-amazon.com/images/I/51-qisfjMnL.jpg', 'Doreamon image', 'Doraemon', [db.users[0].id])

db.posts [3] = new Post(generateId(), db.users[0].id, 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/be507853-8a0b-43b4-8f4d-e3fecd3ab4a5/dg23rkh-41eac4ec-e36f-4954-8d27-d082d5b5ec28.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2JlNTA3ODUzLThhMGItNDNiNC04ZjRkLWUzZmVjZDNhYjRhNVwvZGcyM3JraC00MWVhYzRlYy1lMzZmLTQ5NTQtOGQyNy1kMDgyZDViNWVjMjguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.b9_wYcc3-1q1dH2YCCO743wJPGbpZfuGr6nWuS0h52s', 'Pikachu image', 'selfport.', [db.users[1].id])

db.posts [4] = new Post(generateId(), db.users[0].id, 'https://pbs.twimg.com/media/F-JxDcxWsAA546f?format=jpg&name=large', 'Atomic ant image', 'The girl of my dreams.', [])

db.users[0].saved.push(db.posts[2].id)