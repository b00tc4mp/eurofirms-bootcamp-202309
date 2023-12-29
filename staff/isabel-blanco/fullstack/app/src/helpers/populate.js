import { generateId } from './helpers'
import { User, Post } from './models'
import db from './managers'

db.users[0] = new User(generateId(), 'Elena de Troya', 'elena@troya.com', '123', [])

db.users[1] = new User(generateId(), 'Ash Kepchum', 'ash@kepchum.com', '123', [])

db.users[2] = new User(generateId(), 'Marge Simpson', 'marge@simpson.com', '123', [])

db.posts[0] = new Post(generateId(), db.users[0].id, 'https://static.fnac-static.com/multimedia/Images/ES/NR/46/2d/76/7744838/1540-1.jpg', 'Magdalenas de chocobo', 'Están de oferta en el Carrefour de Juan carlos primero', [])

db.posts[1] = new Post(generateId(), db.users[1].id, 'https://imgs.search.brave.com/_7ggOy3Wp0q46FGgCRnNyWZtNcFUftXjhkUUAIetHFg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzI3LzFk/L2JjLzI3MWRiYzQx/N2IyMTBmZjJlNDBm/ZjhjOWJhNWYyNWQ0/LmpwZw', 'Moguri', 'No solo va de chocobos esta página', [])

db.posts[2] = new Post(generateId(), db.users[2].id, 'https://imgs.search.brave.com/5JILsnN9j6QZxZSz7ueNr8ohFKxY5c3h2dmyGmroYc8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2E3LzE4/L2MyL2E3MThjMjY5/ZWJmNzFmZmJjNjgz/ZDY3Y2IzZmNlNWU5/LmpwZw', 'Chocobo pixel', 'Mi primer chocobo hecho a mano', [])

db.posts[3] = new Post(generateId(), db.users[1].id, 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/09/chocobo-gp-2484521.jpg', 'chocobogp', 'Hoy me vicie muy a este juego', [])

db.users[0].saved.push(db.post[2].id)