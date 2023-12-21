const validate = {
    text(text, explain) {
        if (typeof text !== 'string') throw new TypeError(explain + ' is not a string')
        if (text.trim().length === 0) throw new Error(explain + ' is empty')
    },

    email(email, explain) {
        this.text(email, explain)

        if (!email.includes('@')) throw new Error(explain + ' is not valid')
        if (!email.includes('.')) throw new Error(explain + ' is not valid')
    },

    password(password, explain) {
        this.text(password, explain)

        if (password.length < 8) throw new RangeError(explain + ' length is lower than 8')
    },

    url(url, explain) {
        this.text(url, explain)

        if (!url.startsWith('http')) throw new Error(explain + ' is not valid')
    },

    number(number, explain) {
        if (typeof number !== 'number') throw new TypeError(explain + ' is not a number')
    },

    function(func, explain) {
        if (typeof func !== 'function') throw new TypeError(explain + ' is not a function')
    }
}


module.exports = validate