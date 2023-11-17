// Función para generar IDs aleatorios
function generateId() {
    return Math.floor((Math.random() * 1000000000000000000)).toString(36);
}

// Definición de modelos de datos
function User(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
}

function Post(id, author, image, imageDescription, text, likes) {
    this.id = id;
    this.author = author;
    this.image = image;
    this.imageDescription = imageDescription;
    this.text = text;
    this.likes = likes;
}

// Funciones para clonar objetos de usuario y publicación
function cloneUser(user) {
    return new User(user.id, user.name, user.email, user.password);
}

function clonePost(post) {
    return new Post(post.id, post.author, post.image, post.imageDescription, post.text, [...post.likes]);
}

// Colecciones de la base de datos
const db = {
    users: [],
    posts: [],

    // Encontrar usuario por correo electrónico
    findUserByEmail: function (email) {
        const user = this.users.find(function (user) {
            return user.email === email;
        });

        if (!user) return null;

        return cloneUser(user);
    },

    // Crear un nuevo usuario
    createUser: function (name, email, password) {
        const user = new User(generateId(), name, email, password);

        this.users.push(user);
    },

    // Encontrar usuario por ID
    findUserById: function (id) {
        const user = this.users.find(function (user) {
            return user.id === id;
        });

        if (!user) return null;

        return cloneUser(user);
    },

    // Obtener todas las publicaciones
    getPosts: function () {
        return this.posts.map(function (post) {
            return clonePost(post);
        });
    },

    // Crear una nueva publicación
    createPost: function (userId, image, imageDescription, text) {
        const post = new Post(generateId(), userId, image, imageDescription, text, []);

        this.posts.push(post);
    },

    // Encontrar una publicación por su ID
    findPostById: function (id) {
        const post = this.posts.find(function (post) {
            return post.id === id;
        });

        if (!post) return null;

        return clonePost(post);
    },

    // Actualizar una publicación en la base de datos
    updatePost: function (post) {
        const postId = post.id;

        const postIndex = this.posts.findIndex(function (post) {
            return post.id === postId;
        });

        if (postIndex < 0) throw new Error('publicación no encontrada');

        this.posts[postIndex] = clonePost(post);
    }
};

// Inicializar datos de usuario y publicación
db.users[0] = new User(generateId(), 'Pepito Grillo', 'pepito@grillo.com', '123123123');

db.users[1] = new User(generateId(), 'Campa Nilla', 'campa@nilla.com', '123123123');

db.posts[0] = new Post(generateId(), db.users[0].id, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png', 'Imagen de Sonrisa', '¡Sonrisa!', []);

db.posts[1] = new Post(generateId(), db.users[1].id, 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-1240w/public/sites/nbcutelemundo/files/images/article/2014/08/28/hello_kitty_140920568644_4.jpg', 'Imagen de Hello Kitty', '¡Hola, Kitty!', []);

db.posts[2] = new Post(generateId(), db.users[1].id, 'https://m.media-amazon.com/images/I/51-qisfjMnL.jpg', 'Imagen de Doraemon', 'Doraemon', [db.users[0].id]);

db.posts[3] = new Post(generateId(), db.users[0].id, 'https://i.ebayimg.com/images/g/V9wAAOSw~e5ZU~Ls/s-l1200.webp', 'Imagen de Pikachu', '¡Pikachu!', [db.users[1].id]);

db.posts[4] = new Post(generateId(), db.users[0].id, 'https://i.pinimg.com/550x/64/65/90/6465907c690be529106e4ada2c94d0d6.jpg', 'Imagen de La Hormiga Atómica', '¡La Hormiga Atómica!', []);
