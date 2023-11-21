import { User, Post } from './models'

// los generate ids del antiguo documento data.js

function generateId() {
    return Math.floor((Math.random() * 1000000000000000000)).toString(36)
}

// el apartado cloning del antiguo data.js

function cloneUser(user) {
    return new User(user.id, user.name, user.email, user.password, [...user.saved])
}

function clonePost(post) {
    return new Post(post.id, post.author, post.image, post.imageDescription, post.text, [...post.likes])
}

export {
    generateId,
    cloneUser,
    clonePost
}