//vamos identificar los post y los usuarios a través de id, no del correo, esto supone que clonemos la base de datos, para que la db original no se vea afectada, si un usuarios cambia de correo, cdo se publique o cancele un post....Al clonar la db afecta a la lógica, por lo tanto, creamos una nueva lógica

import { User, Post } from './models'

// función para proporcionar un id a cada post y a casa user 
export function generateId() {
    return Math.floor((Math.random() * 1000000000000000000)).toString(36)
}

//esta funcion es para clonar a los usuarios de la db
export function cloneUser(user) {
    return new User(user.id, user.name, user.email, user.password, [...user.saved])
}

// esta funcion es para clonar los post de la db
export function clonePost(post) {
    return new Post(post.id, post.author, post.image, post.imageDescription, post.text, [...post.likes])
}

