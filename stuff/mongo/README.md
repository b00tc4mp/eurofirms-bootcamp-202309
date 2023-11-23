## Mongo DB Warm Up

mondo db (server) folder
```sh
🐓 cd mongodb-macos-aarch64-7.0.3 
🐓 tree .
.
├── LICENSE-Community.txt
├── MPL-2
├── README
├── THIRD-PARTY-NOTICES
├── bin
│   ├── install_compass
│   ├── mongod
│   └── mongos
└── macos_mongodb.plist
```

create data folder
```sh
🐓 mkdir data
🐓 tree
.
├── LICENSE-Community.txt
├── MPL-2
├── README
├── THIRD-PARTY-NOTICES
├── bin
│   ├── install_compass
│   ├── mongod
│   └── mongos
├── data
└── macos_mongodb.plist
```

to run mongo db
```sh
🐓 ./bin/mongod --dbpath data
```

what happened inside data folder?
```sh
🐓 tree                      
.
├── LICENSE-Community.txt
├── MPL-2
├── README
├── THIRD-PARTY-NOTICES
├── bin
│   ├── install_compass
│   ├── mongod
│   └── mongos
├── data
│   ├── WiredTiger
│   ├── WiredTiger.lock
│   ├── WiredTiger.turtle
│   ├── WiredTiger.wt
│   ├── WiredTigerHS.wt
│   ├── _mdb_catalog.wt
│   ├── collection-0--7750030817920098101.wt
│   ├── collection-2--7750030817920098101.wt
│   ├── collection-4--7750030817920098101.wt
│   ├── diagnostic.data
│   │   ├── metrics.2023-11-23T10-48-55Z-00000
│   │   └── metrics.2023-11-23T10-49-47Z-00000
│   ├── index-1--7750030817920098101.wt
│   ├── index-3--7750030817920098101.wt
│   ├── index-5--7750030817920098101.wt
│   ├── index-6--7750030817920098101.wt
│   ├── journal
│   │   ├── WiredTigerLog.0000000002
│   │   ├── WiredTigerPreplog.0000000001
│   │   └── WiredTigerPreplog.0000000002
│   ├── mongod.lock
│   ├── sizeStorer.wt
│   └── storage.bson
└── macos_mongodb.plist
```

now, let's connect to mongo db via mongo shell
```sh
🐓 cd mongosh-2.1.0-darwin-arm64
🐓 tree                         
.
├── LICENSE-crypt-library
├── LICENSE-mongosh
├── README
├── THIRD_PARTY_NOTICES
├── bin
│   ├── mongosh
│   └── mongosh_crypt_v1.dylib
└── mongosh.1.gz
```

to run mongosh and connect to mongo db service
```sh
🐓 ./bin/mongosh
```

inside mongosh you can run commands (from mongo)

```sh
test> show databases
admin   40.00 KiB
config  12.00 KiB
local   72.00 KiB

test> show collections

// to insert a user

test> db.users.insertOne({ name: 'Pepito Grillo', email: 'pepito@grillo.com', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('655f2fe0c4f051cfaca67b59')
}

// to list all users

test> db.users.find()
[
  {
    _id: ObjectId('655f2fe0c4f051cfaca67b59'),
    name: 'Pepito Grillo',
    email: 'pepito@grillo.com',
    password: '123123123'
  }
]

// insert another user

test> db.users.insertOne({ name: 'Campa Nilla', email: 'campa@nilla.com', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('655f31ebc4f051cfaca67b5a')
}

// list users again

test> db.users.find()
[
  {
    _id: ObjectId('655f2fe0c4f051cfaca67b59'),
    name: 'Pepito Grillo',
    email: 'pepito@grillo.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f31ebc4f051cfaca67b5a'),
    name: 'Campa Nilla',
    email: 'campa@nilla.com',
    password: '123123123'
  }
]

// find user by email

test> db.users.findOne({ email: 'campa@nilla.com' })
{
  _id: ObjectId('655f31ebc4f051cfaca67b5a'),
  name: 'Campa Nilla',
  email: 'campa@nilla.com',
  password: '123123123'
}

// insert more users

test> db.users.insertOne({ name: 'Atomic Ant', email: 'atomic@ant.com', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('655f32b3c4f051cfaca67b5b')
}
test> db.users.insertOne({ name: 'He Man', email: 'he@man.com', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('655f32c8c4f051cfaca67b5c')
}
test> db.users.insertOne({ name: 'Super Man', email: 'super@man.com', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('655f330dc4f051cfaca67b5d')
}
test> db.users.insertOne({ name: 'Bat Man', email: 'bat@man.com', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('655f3381c4f051cfaca67b5e')
}
test> db.users.insertOne({ name: 'Ro Bin', email: 'ro@bin.com', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('655f3392c4f051cfaca67b5f')
}
test> db.users.insertOne({ name: 'Cat Woman', email: 'cat@woman.com', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('655f33a8c4f051cfaca67b60')
}
test> db.users.insertOne({ name: 'Wonder Woman', email: 'wonder@woman.com', password: '123123123' })
{
  acknowledged: true,
  insertedId: ObjectId('655f33dac4f051cfaca67b61')
}

// list all users

test> db.users.find()
[
  {
    _id: ObjectId('655f2fe0c4f051cfaca67b59'),
    name: 'Pepito Grillo',
    email: 'pepito@grillo.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f31ebc4f051cfaca67b5a'),
    name: 'Campa Nilla',
    email: 'campa@nilla.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f32b3c4f051cfaca67b5b'),
    name: 'Atomic Ant',
    email: 'atomic@ant.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f32c8c4f051cfaca67b5c'),
    name: 'He Man',
    email: 'he@man.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f330dc4f051cfaca67b5d'),
    name: 'Super Man',
    email: 'super@man.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f3381c4f051cfaca67b5e'),
    name: 'Bat Man',
    email: 'bat@man.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f3392c4f051cfaca67b5f'),
    name: 'Ro Bin',
    email: 'ro@bin.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f33a8c4f051cfaca67b60'),
    name: 'Cat Woman',
    email: 'cat@woman.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f33dac4f051cfaca67b61'),
    name: 'Wonder Woman',
    email: 'wonder@woman.com',
    password: '123123123'
  }
]

// find users matching regular expression

test> db.users.find({ name: { $regex: 'Man' } })
[
  {
    _id: ObjectId('655f32c8c4f051cfaca67b5c'),
    name: 'He Man',
    email: 'he@man.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f330dc4f051cfaca67b5d'),
    name: 'Super Man',
    email: 'super@man.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f3381c4f051cfaca67b5e'),
    name: 'Bat Man',
    email: 'bat@man.com',
    password: '123123123'
  }
]

// find users by name starting with R

test> db.users.find({ name: { $regex: '^R' } })
[
  {
    _id: ObjectId('655f3392c4f051cfaca67b5f'),
    name: 'Ro Bin',
    email: 'ro@bin.com',
    password: '123123123'
  }
]

// find users by name starting with C

test> db.users.find({ name: { $regex: '^C' } })
[
  {
    _id: ObjectId('655f31ebc4f051cfaca67b5a'),
    name: 'Campa Nilla',
    email: 'campa@nilla.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f33a8c4f051cfaca67b60'),
    name: 'Cat Woman',
    email: 'cat@woman.com',
    password: '123123123'
  }
]

// find first user by name starting wich C

test> db.users.findOne({ name: { $regex: '^C' } })
{
  _id: ObjectId('655f31ebc4f051cfaca67b5a'),
  name: 'Campa Nilla',
  email: 'campa@nilla.com',
  password: '123123123'
}

// update one user information

test> db.users.updateOne({ _id: ObjectId('655f2fe0c4f051cfaca67b59') }, { $set: { name: 'Peter Pan', email: 'peter@pan.com' } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}

// check user information actually changed

test> db.users.findOne({ _id: ObjectId('655f2fe0c4f051cfaca67b59') })
{
  _id: ObjectId('655f2fe0c4f051cfaca67b59'),
  name: 'Peter Pan',
  email: 'peter@pan.com',
  password: '123123123'
}

// delete user

test> db.users.deleteOne({ _id: ObjectId('655f2fe0c4f051cfaca67b59') })
{ acknowledged: true, deletedCount: 1 }

// find user returns null when user not found

test> db.users.findOne({ _id: ObjectId('655f2fe0c4f051cfaca67b59') })
null

// update multiple users (change name by 🤡)

test> db.users.updateMany({ name: { $regex: 'Man' } }, { $set: { name: '🤡' } })
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 3,
  modifiedCount: 3,
  upsertedCount: 0
}

// list users

test> db.users.find()
[
  {
    _id: ObjectId('655f31ebc4f051cfaca67b5a'),
    name: 'Campa Nilla',
    email: 'campa@nilla.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f32b3c4f051cfaca67b5b'),
    name: 'Atomic Ant',
    email: 'atomic@ant.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f32c8c4f051cfaca67b5c'),
    name: '🤡',
    email: 'he@man.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f330dc4f051cfaca67b5d'),
    name: '🤡',
    email: 'super@man.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f3381c4f051cfaca67b5e'),
    name: '🤡',
    email: 'bat@man.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f3392c4f051cfaca67b5f'),
    name: 'Ro Bin',
    email: 'ro@bin.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f33a8c4f051cfaca67b60'),
    name: 'Cat Woman',
    email: 'cat@woman.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f33dac4f051cfaca67b61'),
    name: 'Wonder Woman',
    email: 'wonder@woman.com',
    password: '123123123'
  }
]

// delete all clown users

test> db.users.deleteMany({ name: '🤡' })
{ acknowledged: true, deletedCount: 3 }

// list users

test> db.users.find()
[
  {
    _id: ObjectId('655f31ebc4f051cfaca67b5a'),
    name: 'Campa Nilla',
    email: 'campa@nilla.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f32b3c4f051cfaca67b5b'),
    name: 'Atomic Ant',
    email: 'atomic@ant.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f3392c4f051cfaca67b5f'),
    name: 'Ro Bin',
    email: 'ro@bin.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f33a8c4f051cfaca67b60'),
    name: 'Cat Woman',
    email: 'cat@woman.com',
    password: '123123123'
  },
  {
    _id: ObjectId('655f33dac4f051cfaca67b61'),
    name: 'Wonder Woman',
    email: 'wonder@woman.com',
    password: '123123123'
  }
]
```
