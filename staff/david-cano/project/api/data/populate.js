const mongoose = require('mongoose')
const { User, Product } = require('./models')

const { Types: { ObjectId } } = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_test').then(() => {
    // const tumismo = new User({ name: 'Tu Mismo', email: 'tu@mismo.com', password: '123123123', role: 'regular' })
    // tumismo.save().then(() => console.log('tumismo saved'))

    // const admin = new User({ name: 'admin', email: 'ad@min.com', password: '000000000', role: 'admin' })
    // admin.save().then(() => console.log('admin saved'))

    const product = new Product({ author: new ObjectId('id Admin'), name: 'movil 4', img: 'https://images.unsplash.comphoto-1526045612212-70caf35c14dfw=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vYmlsZXxlbnwwfHwwfHx8MA%3D%3D)', description: 'Descripción del móvil', price: '789 €', quantity: '4' })

    product.save().then(() => console.log('Product saved'))


})