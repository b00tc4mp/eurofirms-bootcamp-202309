import { JWTError } from "../errors"
import { JWT } from '../../utils'

const validate = {
    text(text, explain) {
        if (typeof text !== 'string') throw new TypeError(explain + ' is not a string')
        if (text.trim().length === 0) throw new Error(explain + ' is empty')
    },

    email(email) {
        this.text(email, 'email')

        if (!email.includes('@')) throw new Error('email is not valid')
        if (!email.includes('.')) throw new Error('email is not valid')
    },

    password(password) {
        this.text(password, 'password')

        if (password.length < 8) throw new RangeError('password length is lower than 8')
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
    },

    jwt(jwt) {
        if (!jwt || !(jwt instanceof JWT)) throw new JWTError('JWT not valid')
        if (jwt.isExpired()) throw new JWTError('JWT expired')
    }
}

export default validate