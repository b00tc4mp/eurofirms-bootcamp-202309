



export function User(id, name, email, password, saved) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
    this.saved = saved
}



export function Post(id, author, image, imageDescription, text, likes) {
    this.id = id
    this.author = author
    this.image = image
    this.imageDescription = imageDescription
    this.text = text
    this.likes = likes
}
