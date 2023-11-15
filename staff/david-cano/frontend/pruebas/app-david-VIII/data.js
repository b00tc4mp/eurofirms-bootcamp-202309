// Función para generar IDs aleatorios
function generateId() {
    return Math.floor((Math.random() * 1000000000000000000)).toString(36)
}

// Modelo de datos para usuarios
function User(id, name, email, password, saved) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.saved = saved
}

// Modelo de datos para publicaciones
function Post(id, author, image, imageDescription, text, likes) {
    this.id = id
    this.author = author
    this.image = image
    this.imageDescription = imageDescription
    this.text = text
    this.likes = likes
}

// Función para clonar un objeto de usuario
function cloneUser(user) {
    return new User(user.id, user.name, user.email, user.password, [...user.saved])
}

// Función para clonar un objeto de publicación
function clonePost(post) {
    return new Post(post.id, post.author, post.image, post.imageDescription, post.text, [...post.likes])
}

// Colecciones de la base de datos
const db = {
    users: [],
    posts: [],

    // Función para buscar un usuario por su correo electrónico
    findUserByEmail: function (email) {
        const user = this.users.find(function (user) {
            return user.email === email
        })

        // Si no se encuentra al usuario, devolver null; de lo contrario, devolver una copia clonada del usuario
        if (!user) return null
        return cloneUser(user)
    },

    // Función para crear un nuevo usuario
    createUser: function (name, email, password) {
        const user = new User(generateId(), name, email, password, [])

        // Agregar el usuario a la colección de usuarios
        this.users.push(user)
    },

    // Función para buscar un usuario por su ID
    findUserById: function (id) {
        const user = this.users.find(function (user) {
            return user.id === id
        })

        // Si no se encuentra al usuario, devolver null; de lo contrario, devolver una copia clonada del usuario
        if (!user) return null
        return cloneUser(user)
    },

    // Función para actualizar la información de un usuario en la base de datos
    updateUser: function (user) {
        const userId = user.id

        // Encontrar el índice del usuario en la colección de usuarios
        const userIndex = this.users.findIndex(function (user) {
            return user.id === userId
        })

        // Lanzar un error si el usuario no se encuentra
        if (userIndex < 0)
            throw new Error('Usuario no encontrado')

        // Actualizar la información del usuario en la colección de usuarios
        this.users[userIndex] = cloneUser(user)
    },

    // Función para obtener una lista de todos los usuarios clonados
    getUsers: function () {
        return this.users.map(function (user) {
            return cloneUser(user)
        })
    },

    // Función para obtener una lista de todas las publicaciones clonadas
    getPosts: function () {
        return this.posts.map(function (post) {
            return clonePost(post)
        })
    },

    // Función para crear una nueva publicación
    createPost: function (userId, image, imageDescription, text) {
        const post = new Post(generateId(), userId, image, imageDescription, text, [])

        // Agregar la publicación a la colección de publicaciones
        this.posts.push(post)
    },

    // Función para buscar una publicación por su ID
    findPostById: function (id) {
        const post = this.posts.find(function (post) {
            return post.id === id
        })

        // Si no se encuentra la publicación, devolver null; de lo contrario, devolver una copia clonada de la publicación
        if (!post) return null
        return clonePost(post)
    },

    // Función para actualizar la información de una publicación en la base de datos
    updatePost: function (post) {
        const postId = post.id

        // Encontrar el índice de la publicación en la colección de publicaciones
        const postIndex = this.posts.findIndex(function (post) {
            return post.id === postId
        })

        // Lanzar un error si la publicación no se encuentra
        if (postIndex < 0)
            throw new Error('Publicación no encontrada')

        // Actualizar la información de la publicación en la colección de publicaciones
        this.posts[postIndex] = clonePost(post)
    },

    // Función para eliminar una publicación por su ID
    removePostById: function (id) {
        // Encontrar el índice de la publicación en la colección de publicaciones
        const postIndex = this.posts.findIndex(function (post) {
            return post.id === id
        })

        // Lanzar un error si la publicación no se encuentra
        if (postIndex < 0)
            throw new Error('Publicación no encontrada')

        // Eliminar la publicación de la colección de publicaciones
        this.posts.splice(postIndex, 1)
    }
}

// Poblar la base de datos con algunos usuarios y publicaciones iniciales

// Crear usuarios de ejemplo
db.users[0] = new User(generateId(), 'Pepito Grillo', 'pepito@grillo.com', '123123123', [])
db.users[1] = new User(generateId(), 'Campa Nilla', 'campa@nilla.com', '123123123', [])

// Crear publicaciones de ejemplo y asignarlas a los usuarios
db.posts[0] = new Post(generateId(), db.users[0].id, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png', 'Smile image', '¡Sonríe!', [])
db.posts[1] = new Post(generateId(), db.users[1].id, 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-1240w/public/sites/nbcutelemundo/files/images/article/2014/08/28/hello_kitty_140920568644_4.jpg', 'Hello Kitty image', '¡Hola, Kitty!', [])
db.posts[2] = new Post(generateId(), db.users[1].id, 'https://m.media-amazon.com/images/I/51-qisfjMnL.jpg', 'Doreamon image', 'Doraemon', [db.users[0].id])
db.posts[3] = new Post(generateId(), db.users[0].id, 'https://i.ebayimg.com/images/g/V9wAAOSw~e5ZU~Ls/s-l1200.webp', 'Pikachu image', '¡Pikachu!', [db.users[1].id])
db.posts[4] = new Post(generateId(), db.users[0].id, 'https://i.pinimg.com/550x/64/65/90/6465907c690be529106e4ada2c94d0d6.jpg', 'Atomic ant image', '¡La Hormiga Atómica!', [])

// Asignar una publicación a la lista de publicaciones "guardadas" por un usuario
db.users[0].saved.push(db.posts[2].id)
