import { JWTError } from "./errors"

function validateText(text, explain) {
    if (typeof text !== 'string') throw new TypeError(explain + ' is not a string')
    if (text.trim().length === 0) throw new Error(explain + ' is empty')
}

function validateEmail(email, explain) {
    validateText(email, explain)

    if (!email.includes('@')) throw new Error(explain + ' is not valid')
    if (!email.includes('.')) throw new Error(explain + ' is not valid')
}

function validatePassword(password, explain) {
    validateText(password, explain)

    if (password.length < 8) throw new RangeError(explain + ' length is lower than 8')
}

function validateUrl(url, explain) {
    validateText(url, explain)

    if (!url.startsWith('http')) throw new Error(explain + ' is not valid')
}

function validateNumber(number, explain) {
    if (typeof number !== 'number') throw new TypeError(explain + ' is not a number')
}

function validateFunction(func, explain) {
    if (typeof func !== 'function') throw new TypeError(explain + ' is not a function')
}

function validateJWT(jwt) {
    if (!jwt) throw new JWTError('JWT not valid')
    if (jwt.isExpired()) throw new JWTError('JWT expired')
}

export {
    validateText,
    validateEmail,
    validatePassword,
    validateUrl,
    validateNumber,
    validateFunction,
    validateJWT
}