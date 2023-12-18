const { MongoClient, ObjectId } = require('mongodb')

const client = new MongoClient('mongodb://127.0.0.1:27017')

// client.connect().then(function(connection) {
//     // ...
// })

client.connect().then(connection => {
    const db = connection.db('test')
    const users = db.collection('users')

     users.insertOne({ name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123' }).then(result => console.log(result))
    //users.insertOne({ name: 'Peter Pan', email: 'peter@pan.com', password: '123123123' }).then(result => console.log(result))
    //users.insertOne({ name: 'Peter Pan', email: 'peter@pan.com', password: '123123123' }).then(result => console.log(result))
    //users.insertOne({ name: 'Wendy Darling', email: 'wendy@darling.com', password: '123123123' }).then(result => console.log(result))

    users.find({}).toArray().then(users => console.table(users))

    //users.updateOne({ _id: new ObjectId('655f3392c4f051cfaca67b5f') }, { $set: { name: 'Bat Man', email: 'bat@man.com' } }).then(result => console.log(result))

    //users.deleteOne({ _id: new ObjectId('655f3392c4f051cfaca67b5f') }).then(result => console.log(result))

    //users.updateMany({ name: { $regex: 'Woman' } }, { $set: { name: '🤡' } }).then(result => console.log(result))

    // users.deleteMany({ name: '🤡' }).then(result => console.log(result))

})