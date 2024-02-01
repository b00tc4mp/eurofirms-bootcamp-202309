const { isValidObjectId } = require('mongoose')
const { ContentError } = require('../errors')

const validate = {
    text(text, explain) {
        if (typeof text !== 'string') throw new TypeError(explain + ' is not a string')
        if (text.trim().length === 0) throw new ContentError(explain + ' is empty string')
    },

    password(password, explain) {
        this.text(password, explain)

        if (password.length < 8) throw new RangeError(explain + ' length is lower than 8 password')
    },

    url(url, explain) {
        this.text(url, explain)

        if (!url.startsWith('http')) throw new ContentError(explain + ' is not a valid url')
    },

    number(number, explain) {
        if (typeof number !== 'number') throw new TypeError(explain + ' is not a number')
    },

    function(func, explain) {
        if (typeof func !== 'function') throw new TypeError(explain + ' is not a function')
    },

    id(id, explain) {
        if (!isValidObjectId(id)) throw new TypeError(explain + ' is not a valid id')
    },

    role(role, explain) {
        this.text(role, explain)

        const allowedRoles = ['administrador', 'secretaria', 'juez', 'juez-c']

        if (!allowedRoles.includes(role)) {
            throw new Error(role + ' is not a valid role')
        }
    },


    status(status, explain) {
        this.text(status, explain)

        const allowedStatus = ['starting', 'activated', 'deactivated']

        if (!allowedStatus.includes(status)) {
            throw new Error(status + ' is not a valid status')
        }
    },
    date(date, explain) {
        this.text(date, explain)
        if (isNaN(new Date(date))) {
            throw new Error(explain + 'is not a valid date')
        }
    }

}


module.exports = validate