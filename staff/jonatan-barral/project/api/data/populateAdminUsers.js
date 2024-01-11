const bcrypt = require('bcryptjs')

const mongoose = require('mongoose')
const { User } = require('./models')

const { Types: { ObjectId } } = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/projectapi')
    .then(() => {
        const password = 't3st34nd0'
        return bcrypt.hash(password, 8)
    })
    .then((hashedPassword) => {
        const administrador = new User({ name: 'jonatan', username: 'Adminj1', password: hashedPassword, role: 'administrador', })

        return administrador.save()
    })
    .then(() => {
        console.log('User created');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
