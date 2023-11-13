import { User, Post } from './models'
export function generateId() {
    return Math.floor((Math.random() * 1000000000000000000)).toString(36)
}

export function cloneUser(user) {
    return new User(user.id, user.name, user.email, user.password, [...user.saved])
}

export function clonePost(post) {
    return new Post(post.id, post.author, post.image, post.imageDescription, post.text, [...post.likes])
}