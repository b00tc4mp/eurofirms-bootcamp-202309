//vamos identificar los post y los usuarios a través de id, no del correo, esto supone que clonemos la base de datos, para que la db original no se vea afectada, si un usuarios cambia de correo, cdo se publique o cancele un post....Al clonar la db afecta a la lógica, por lo tanto, creamos una nueva lógica

// función para proporcionar un id a cada post y a casa user 
function generateId() {
    return Math.floor((Math.random() * 1000000000000000000)).toString(36)
}

// data models. Con un constructor, asignamos atributos a cada elemento
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

//esta funcion es para clonar a los usuarios de la db
function cloneUser(user) {
    return new User(user.id, user.name, user.email, user.password, [...user.saved])
}

// esta funcion es para clonar los post de la db
function clonePost(post) {
    return new Post(post.id, post.author, post.image, post.imageDescription, post.text, [...post.likes])
}

// database collections

const db = {

    users: [],
    posts: [],


    // El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.

    findUserByEmail: function (email) {
        const user = this.users.find(function (user) {
            return user.email === email
        })

        if (!user) return null

        return cloneUser(user)

    },

    createUser: function (name, email, password) {
        const user = new User(generateId(), name, email, password, [])

        this.users, push(user)
    },

    findUserById: function (id) {
        const user = this.users.find(function (user) {
            return user.id === id
        })

        if (!user) return null

        return cloneUser(user)
    },


    //obtener publicación
    getPosts: function () {
        return this.posts.map(function (post) {
            return clonePost(post)
        })
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


    //actualizar publicación
    updatePost: function (post) {
        const postId = post.id

        const postIndex = this.posts.findIndex(function (post) {
            return post.id === postId
        })

        if (postIndex < 0)
            throw new Error('post not found')

        this.posts[postIndex] = clonePost(post)
    },

    // es la función para borrar un post. Es un 1 pq elimina un post del index de la array.

    removePostById: function (id) {
        const postIndex = this.posts.findIndex(function (post) {
            return post.id === id
        })

        if (postIndex < 0)
            throw new Error('post not found')

        this.posts.splice(postIndex, 1)
    }
}

// populate 


db.users[0] = new User(generateId(), 'Pepito Grillo', 'pepito@grillo.com', '123123123', [])

db.users[1] = new User(generateId(), 'Campa Nilla', 'campa@nilla.com', '123123123', [])

//post

//los likes , son una array dentro de una array

db.posts[0] = new Post(generateId(), db.users[0].id, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png', 'Smile image', 'Smile!', [])

db.posts[1] = new Post(generateId(), db.users[1].id, 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-1240w/public/sites/nbcutelemundo/files/images/article/2014/08/28/hello_kitty_140920568644_4.jpg', 'Hello Kitty image', 'Hello, Kitty!', [])

db.posts[2] = new Post(generateId(), db.users[1].id, 'https://m.media-amazon.com/images/I/51-qisfjMnL.jpg', 'Doreamon image', 'Doraemon', [db.users[0].id])

db.posts[3] = new Post(generateId(), db.users[0].id,
    'https://i.ebayimg.com/images/g/V9wAAOSw~e5ZU~Ls/s-l1200.webp', 'Pikachu image',
    'Pikachu!', [])

db.posts[4] = new Post(generateId(), db.users[1].id, 'https://i.pinimg.com/550x/64/65/90/6465907c690be529106e4ada2c94d0d6.jpg', 'Atomic ant image', 'La Hormiga Atómica!', [])

db.posts[5] = new Post(generateId(), db.users[0].id, 'https://coolandthebag.com/cdn/shop/products/BD-Mafalda-une-collection-engagee-3.jpg?v=1601570071', 'Mafalda screaming BASTA!', 'Mafalda', [])

db.users[0].saved.push(db.posts[2].id)




