const mongoose = require('mongoose')
const { User, Product } = require('./models')

const { Types: { ObjectId } } = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_test').then(() => {
    // const tumismo = new User({ name: 'Tu Mismo', email: 'tu@mismo.com', password: '123123123', role: 'regular' })
    // tumismo.save().then(() => console.log('tumismo saved'))

    // const admin = new User({ name: 'admin', email: 'ad@min.com', password: '000000000', role: 'admin' })
    // admin.save().then(() => console.log('admin saved'))

    const product = new Product({ author: new ObjectId('65ae4884a4c8aaa5bb6c229c'), name: 'movil 4', img: 'https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1619424023.00057432!400x400!85.png', description: 'Descripción del móvil', price: '455 €', quantity: '4' })

    product.save().then(() => console.log('Product saved'))


})