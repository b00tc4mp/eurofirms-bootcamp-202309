import { JWTError, ContentError } from "../errors"
import { JWT } from '../../utils'

const validate = {

    text(text, explain) {
        if (typeof text !== 'string') throw new TypeError(explain + ' is not a string')
        if (text.trim().length === 0) throw new ContentError(explain + ' is empty')
    },

    email(email) {
        validateText(email, 'email')
        if (!email.includes('@')) throw new ContentError('email is not valid')
        if (!email.includes('.')) throw new ContentError('email is not valid')
    },

    password(password) {
        validateText(password, 'password')
        if (password.length < 8) throw new RangeError('password length is lower than 8')
    },
    url(url, explain) {
        validateText(url, explain)
        if (!url.startsWith('http')) throw new ContentError(explain + ' is not valid')
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