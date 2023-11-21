function generateId() {
    return Math.floor((Math.random() * 1000000000000000000)).toString(36)
}

function User(id, name, email, password, saved) {
    this.id = id
    this.name = name
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

    updateUser: function (user) {
        const userId = user.id

        const userIndex = this.users.findIndex(function (user) {
            return user.id === userId
        })

        if (userIndex < 0)
            throw new Error('user not found')

        this.users[userIndex] = cloneUser(user)
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

db.users[0] = new User(generateId(), 'Elena de Troya', 'elena@troya.com', '123', [])

db.users[1] = new User(generateId(), 'Ash Kepchum', 'ash@kepchum.com', '123', [])

db.users[2] = new User(generateId(), 'Marge Simpson', 'marge@simpson.com', '123', [])

db.posts[0] = new Post(generateId(), db.users[0].id, 'https://static.fnac-static.com/multimedia/Images/ES/NR/46/2d/76/7744838/1540-1.jpg', 'Magdalenas de chocobo', 'Están de oferta en el Carrefour de Juan carlos primero', [])

db.posts[1] = new Post(generateId(), db.users[1].id, 'https://imgs.search.brave.com/_7ggOy3Wp0q46FGgCRnNyWZtNcFUftXjhkUUAIetHFg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI3LzFk/L2JjLzI3MWRiYzQx/N2IyMTBmZjJlNDBm/ZjhjOWJhNWYyNWQ0/LmpwZw', 'Moguri', 'No solo va de chocobos esta página', [])

db.posts[2] = new Post(generateId(), db.users[2].id, 'https://imgs.search.brave.com/5JILsnN9j6QZxZSz7ueNr8ohFKxY5c3h2dmyGmroYc8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E3LzE4/L2MyL2E3MThjMjY5/ZWJmNzFmZmJjNjgz/ZDY3Y2IzZmNlNWU5/LmpwZw', 'Chocobo pixel', 'Mi primer chocobo hecho a mano', [])

db.posts[3] = new Post(generateId(), db.users[1].id, 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/09/chocobo-gp-2484521.jpg', 'chocobogp', 'Hoy me vicie muy a este juego', [])