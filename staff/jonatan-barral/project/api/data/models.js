const mongoose = require('mongoose')
const { number } = require('../logic/helpers/validate')

const { Schema, model, Types: { ObjectId } } = mongoose

const user = new Schema({
    creator: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    name: {
        type: String,
        required: true
    },


    username: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    role: {
        type: String,
        enum: ['administrador', 'secretaria', 'juez', 'juez-c'],
        required: true
    },

    status: {
        type: String,
        enum: ['starting', 'activated', 'deactivated'],
        default: 'starting'
    }

})

const competition = new Schema({
    date: {
        type: String,
        required: true
    },

    organizer: {
        type: ObjectId,
        ref: 'User',
        required: true
    },

    judges: [{
        type: ObjectId,
        ref: 'User',
        required: true
    }],

    president: {
        type: ObjectId,
        ref: 'User',
        required: true
    },


    location: {
        type: String,
        required: true
    },

    competitors: [{
        type: ObjectId,
        ref: 'Competitor',
        required: true
    }],

    horses: [{
        type: ObjectId,
        ref: 'Horse',
        required: true
    }],

    active: {
        type: Boolean,
        default: true
    }

})

const competitor = new Schema({
    fullName: {
        type: String,
        required: true
    },

    license: {
        type: String,
    },
})

const horse = new Schema({
    name: {
        type: String,
        required: true
    },

    license: {
        type: String,
    }
})

const test = new Schema({
    competition: {
        type: ObjectId,
        ref: 'Competition',
        required: true
    },

    trial: {
        type: String,
        enum: ['Oficial', 'Open'],
        required: true
    },

    level: {
        type: String,
        enum: ['0', '1', '2', '3', '4', 'San Jorge', 'Intermedia 1', 'Intermedia 2', 'intermedia A-B', 'Gran Premio', 'Doma Paralímpica'],
        required: true
    },

    reprise: {
        type: ObjectId,
        ref: 'Reprise',
        required: true
    }

})

const reprise = new Schema({
    type: {
        type: String,
        enum: ['AP Final', 'AP Preliminar', 'Benjamines 1', 'Benjamines 2', '4 años experimental', '4 años preliminar', '4 años final', 'Alevines equipos', 'Alevines individual', 'Alevines preliminar', 'Promoción 1', 'Rider 1A', 'Rider 1B', 'Rider 1C', '5 años final', '5 años preliminar', 'Infantiles Equipos', 'Infantiles Individual', 'Infantiles Preliminar A', 'Infantiles Preliminar B', 'Promoción 2', 'Rider 2A', 'Rider 2B', 'Rider 2C', 'Juveniles 0 Equipos', 'Juveniles 0 Individual', 'Juveniles 0 Preliminar', 'Kur Juveniles 0', 'Promoción 3', 'Rider 3A', 'rider 3B', 'Rider 3C', 'Rider 3D', 'Ponis Equipos', 'Ponis Individual', 'Kur Ponis', 'Ponis Preliminar', '6 Años Final', '6 Años Preliminar', 'Clásica 1', 'Clásica 2', 'Clásica 3', 'Juveniles Individual', 'Juveniles Preliminar', 'Juveniles Equipos', 'Kur Juveniles', 'Promoción 4', 'Jóvenes Jinetes Equipos', 'Jóvenes Jinetes Individual', 'Jóvenes Jinetes Preliminar', 'Kur Jóvenes Jinetes', 'Preliminar Caballos 7 Años', 'Final Caballos Jóvenes', 'San Jorge', 'Intermedia I', 'Kur Intermedia I', 'Intermedia II', 'Intermedia A', 'Intermedia B', 'Kur Intermedia A-B', 'Gran Premio Caballos Jóvenes J 8', 'Gran Premio Especial', 'Gran Premio U25', 'Gran Premio', 'Kur Gran Premio', 'Grado I Novel A', 'Grado I Novel B', 'Grado I Intermedia A', 'Grado I Intermedia B', 'Grado I Gran Premio A', 'Grado I Gran Premio B', 'Grado I Kür Gran Premio', 'Grado II Novel A', 'Grado II Novel B', 'Grado II Intermedia A', 'Grado II Intermedia B', 'Grado II Gran Premio A', 'Grado II Gran Premio B', 'Grado II Kür Gran Premio', 'Grado III Novel A', 'Grado III Novel B', 'Grado III Intermedia A', 'Grado III Intermedia B', 'Grado III Gran Premio A', 'Grado III Gran Premio B', 'Grado III Kür Gran Premio', 'Grado IV Novel A', 'Grado IV Novel B', 'Grado IV Intermedia A', 'Grado IV Intermedia B', 'Grado IV Gran Premio A', 'Grado IV Gran Premio B', 'Grado IV Kür Gran Premio', 'Grado V Novel A', 'Grado V Novel B', 'Grado V Intermedia A', 'Grado V Intermedia B', 'Grado V Gran Premio A', 'Grado V Gran Premio B', 'Grado V Kür Gran Premio', 'Grado VI-A Novel A', 'Grado VI-A novel B', 'Grado VI-A Intermedia A', 'Grado VI-A Intermedia B', 'Grado VI-A Gran Premio A', 'Grado VI-A Gran Premio B', 'Grado VI-A Kür Gran Premio', 'Grado VI-B Novel A', 'Grado VI-B novel B', 'Grado VI-B Intermedia A', 'Grado VI-B Intermedia B', 'Grado VI-B Gran Premio A', 'Grado VI-B Gran Premio B', 'Grado VI-B Kür Gran Premio'],
        required: true
    },


})


const exercise = new Schema({
    reprise: {
        type: ObjectId,
        ref: 'Reprise',
        required: true
    },

    order: {
        type: Number,
        required: true
    },

    letters: {
        type: String,
        required: true
    },

    movements: {
        type: String,
        required: true
    },

    points: {
        type: Number,
        default: 10,
        required: true
    },

    coefficient: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        default: 1,
        required: true
    },

    directives: {
        type: String,
        required: true
    }
})

const collectiveNote = new Schema({
    reprise: {
        type: ObjectId,
        ref: 'reprise',
        required: true
    },

    order: {
        type: number,
        required: true
    },

    aspects: {
        type: String,
        required: true
    },

    points: {
        type: Number,
        default: 10,
        required: true
    },

    coefficient: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        default: 1,
        required: true
    },

})

const failure = new Schema({
    coment: {
        type: String
    }
})

const mark = new Schema({
    competition: {
        type: ObjectId,
        ref: 'Competition',
        required: true
    },

    test: {
        type: ObjectId,
        ref: 'Test',
        required: true
    },

    reprise: {
        type: ObjectId,
        ref: 'Reprise',
        required: true
    },

    exercise: {
        type: ObjectId,
        ref: 'Exercise',
        required: true
    },

    judge: {
        type: ObjectId,
        ref: 'User',
        required: true

    },

    judgePosition: {
        type: String,
        required: true
    },

    competitor: {
        type: ObjectId,
        ref: 'Competitor',
        required: true
    },

    horse: {
        type: ObjectId,
        ref: 'Horse',
        required: true
    },

    mark: {
        type: Number,
        required: true
    },


    coment: {
        type: String
    },

    failures: {
        type: [failure]
    }
})


const collectiveMark = new Schema({
    competition: {
        type: ObjectId,
        ref: 'Competition',
        required: true
    },

    test: {
        type: ObjectId,
        ref: 'Test',
        required: true
    },

    reprise: {
        type: ObjectId,
        ref: 'Reprise',
        required: true
    },

    collectiveNote: {
        type: ObjectId,
        ref: 'CollectiveNote',
        required: true
    },

    judge: {
        type: ObjectId,
        ref: 'User',
        required: true

    },

    judgePosition: {
        type: String,
        required: true
    },

    competitor: {
        type: ObjectId,
        ref: 'Competitor',
        required: true
    },

    horse: {
        type: ObjectId,
        ref: 'Horse',
        required: true
    },

    mark: {
        type: Number,
        required: true
    },

})

const generalComent = new Schema({
    competition: {
        type: ObjectId,
        ref: 'Competition',
        required: true
    },

    test: {
        type: ObjectId,
        ref: 'Test',
        required: true
    },

    reprise: {
        type: ObjectId,
        ref: 'Reprise',
        required: true
    },

    judge: {
        type: ObjectId,
        ref: 'User',
        required: true

    },

    judgePosition: {
        type: String,
        required: true
    },

    competitor: {
        type: ObjectId,
        ref: 'Competitor',
        required: true
    },

    horse: {
        type: ObjectId,
        ref: 'Horse',
        required: true
    },

    coment: {
        type: String
    }
})
const User = model('User', user)

const Competition = model('Competition', competition)

const Competitor = model('Competitor', competitor)

const Horse = model('Horse', horse)

const Test = model('Test', test)

const Reprise = model('Reprise', reprise)

const Exercise = model('Exercise', exercise)

const CollectiveNote = model('CollectiveNote', collectiveNote)

const Failure = model('Failure', failure)

const Mark = model('Mark', mark)

const CollectiveMark = model('CollectiveMark', collectiveMark)

const GeneralComent = model('GeneralComent', generalComent)

module.exports = {
    User,
    Competition,
    Competitor,
    Horse,
    Test,
    Reprise,
    Exercise,
    CollectiveNote,
    Failure,
    Mark,
    CollectiveMark,
    GeneralComent

}