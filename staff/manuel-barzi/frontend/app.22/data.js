// generate ids

function generateId() {
    return Math.floor((Math.random() * 1000000000000000000)).toString(36)
}

// data models

function User(id, name, email, password) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
}

function Post(id, author, image, imageDescription, text, likes) {
    this.id = id
    this.author = author
    this.image = image
    this.imageDescription = imageDescription
    this.text = text
    this.likes = likes
}

// cloning

function cloneUser(user) {
    return new User(user.id, user.name, user.email, user.password)
}

function clonePost(post) {
    return new Post(post.id, post.author, post.image, post.imageDescription, post.text, [...post.likes])
}

// database collections

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
        const user = new User(generateId(), name, email, password)

        this.users.push(user)
    },

    findUserById: function (id) {
        const user = this.users.find(function (user) {
            return user.id === id
        })

        if (!user) return null

        return cloneUser(user)
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
            throw new Error('post not found')

        this.posts[postIndex] = clonePost(post)
    }
}

// populate

db.users[0] = new User(generateId(), 'Pepito Grillo', 'pepito@grillo.com', '123123123')

db.users[1] = new User(generateId(), 'Campa Nilla', 'campa@nilla.com', '123123123')

db.posts[0] = new Post(generateId(), db.users[0].id, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png', 'Smile image', 'Smile!', [])

db.posts[1] = new Post(generateId(), db.users[1].id, 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-1240w/public/sites/nbcutelemundo/files/images/article/2014/08/28/hello_kitty_140920568644_4.jpg', 'Hello Kitty image', 'Hello, Kitty!', [])

db.posts[2] = new Post(generateId(), db.users[1].id, 'https://m.media-amazon.com/images/I/51-qisfjMnL.jpg', 'Doreamon image', 'Doraemon', [db.users[0].id])

db.posts[3] = new Post(generateId(), db.users[0].id, 'https://i.ebayimg.com/images/g/V9wAAOSw~e5ZU~Ls/s-l1200.webp', 'Pikachu image', 'Pikachu!', [db.users[1].id])

db.posts[4] = new Post(generateId(), db.users[0].id, 'https://i.pinimg.com/550x/64/65/90/6465907c690be529106e4ada2c94d0d6.jpg', 'Atomic ant image', 'La Hormiga Atómica!', [])