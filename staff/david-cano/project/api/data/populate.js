const mongoose = require('mongoose')
const { User } = require('./models')

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_test').then(() => {
    const tumismo = new User({ name: 'Tu Mismo', email: 'tu@mismo.com', password: '123123123', role: 'regular' })
    tumismo.save().then(() => console.log('tumismo saved'))

    const admin = new User({ name: 'admin', email: 'ad@min.com', password: '000000000', role: 'admin' })
    admin.save().then(() => console.log('admin saved'))

})