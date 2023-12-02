// DATA BASE, creamos una base de datos (ficticia) con dos arrays vacíos para usuarios y posts

// Agregamos 2 usuarios de ejemplo
var users = [];

users[0] = { 
    name: 'Pepito Grillo',
    email: 'pepito@grillo.com',
    password: '123123123' }

users[1] = { 
    name: 'Campa Nilla',
    email: 'campa@nilla.com',
    password: '123123123' }

 // Agregamos algunos posts de ejemplo   
var posts = [];

posts[0] = {
    author: 'pepito@grillo.com',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
    imageDescription: 'Icono carita sonriente',
    text: 'Smile!'
}

posts[1] = {
    author: 'campa@nilla.com',
    image: 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-1240w/public/sites/nbcutelemundo/files/images/article/2014/08/28/hello_kitty_140920568644_4.jpg',
    imageDescription: 'Hello Kitty image',
    text: 'Hello, Kitty!'
}

posts[2] = {
    author: 'campa@nilla.com',
    image: 'https://m.media-amazon.com/images/I/51-qisfjMnL.jpg',
    imageDescription: 'Doreamon image',
    text: 'Doraemon'
}

posts[3] = {
    author: 'pepito@grillo.com',
    image: 'https://i.ebayimg.com/images/g/V9wAAOSw~e5ZU~Ls/s-l1200.webp',
    imageDescription: 'Pikachu image',
    text: 'Pikatchu!'
}

posts[4] = {
    author: 'pepito@grillo.com',
    image: 'https://i.pinimg.com/550x/64/65/90/6465907c690be529106e4ada2c94d0d6.jpg',
    imageDescription: 'Atomic ant image',
    text: 'La Hormiga Atómica!'
}