import { generateId } from './helpers'
import { User, Post } from './models'
import db from './managers'

// populate

db.users[0] = new User(generateId(), 'Pepito Grillo', 'pepito@grillo.com', '123123123', [])

db.users[1] = new User(generateId(), 'Campa Nilla', 'campa@nilla.com', '123123123', [])

db.posts[0] = new Post(generateId(), db.users[0].id, 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png', 'Smile image', 'Smile!', [])

db.posts[1] = new Post(generateId(), db.users[1].id, 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-1240w/public/sites/nbcutelemundo/files/images/article/2014/08/28/hello_kitty_140920568644_4.jpg', 'Hello Kitty image', 'Hello, Kitty!', [])

db.posts[2] = new Post(generateId(), db.users[1].id, 'https://m.media-amazon.com/images/I/51-qisfjMnL.jpg', 'Doreamon image', 'Doraemon', [db.users[0].id])

db.posts[3] = new Post(generateId(), db.users[0].id, 'https://i.ebayimg.com/images/g/V9wAAOSw~e5ZU~Ls/s-l1200.webp', 'Pikachu image', 'Pikachu!', [db.users[1].id])

db.posts[4] = new Post(generateId(), db.users[0].id, 'https://i.pinimg.com/550x/64/65/90/6465907c690be529106e4ada2c94d0d6.jpg', 'Atomic ant image', 'La Hormiga Atómica!', [])

db.users[0].saved.push(db.posts[2].id)