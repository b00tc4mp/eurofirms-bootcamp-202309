// data base collection (creamos una base de datos con usuarios)

// variable para usuarios y variable para post
var users = []
var post = []

// esta base de datos, por ahora es ficticia, se registra y aparece en la consola, por ahora no navega a ninún lado.

// populate some users
users[0] = {
    name: 'Pepito Grillo',
    email: 'pepito@grillo.com',
    password: '123456'
}

users[1] = {
    name: 'Campa Nilla',
    email: 'campa@nilla.com',
    password: '123456'

}

users[2] = {
    name: 'Marisa Paredes',
    email: 'marisa@paredes.com',
    password: '123456'
}

//populate some users

post[0] = {
    author: 'campa@nilla.com',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzyuoGjIQlSq-zl2fKYx2cqjeWf1x_6vY97w&usqp=CAU',
    text: 'Hasta yo me rindo a los encantos de Halloween'
}


post[1] = {
    author: 'pepito@grillo.com',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMfSjYTJmAnEMmH_QGjqGtvIQVRdkwWCPOsg&usqp=CAU',
    text: 'Truco o trato. Hoy quede con campanilla para disfrutar Haloween'
}


post[2] = {
    author: 'marisa@paredes.com',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf9GikthR4nwv7ctRg8DPkwKl2OhfSjquSMA&usqp=CAU',
    text: 'La mejos'
}
