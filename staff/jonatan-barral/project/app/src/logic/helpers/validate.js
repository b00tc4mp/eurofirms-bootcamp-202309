import { JWTError } from "./errors"
import JWT from '../utils/JWT'

function text(text, explain) {
    if (typeof text !== 'string') throw new TypeError(explain + ' is not a string')
    if (text.trim().length === 0) throw new Error(explain + ' is empty')
}

function email(email) {
    text(email, 'email')
    if (!email.includes('@')) throw new Error('email is not valid')
    if (!email.includes('.')) throw new Error('email is not valid')
}

function password(password) {
    text(password, 'password')
    if (password.length < 8) throw new RangeError('password length is lower than 8')
}

function number(number, explain) {
    if (typeof number !== 'number') throw new TypeError(explain + ' is not a number')
}

function funktion(funktion, explain) {
    if (typeof funktion !== 'function') throw new TypeError(explain + ' is not a function')
}

function jwt(jwt) {
    if (!jwt || !(jwt instanceof JWT)) throw new JWTError('JWT not valid')
    if (jwt.isExpired()) throw new JWTError('JWT expired')
}

const validate = {
    text,
    email,
    password,
    url,
    number,
    funktion,
    jwt
}

export default validate