export function validateText(text, explain) {
    if (typeof text !== 'string') throw new TypeError(explain + 'is not a string')
    if (text.trim().length === 0) throw new Error(explain + 'is empty')
}

export function validateEmail(email) {
    validateText(email, 'email')
    if (!email.includes('@')) throw new Error('email is not valid')
    if (!email.includes('.')) throw new Error('email is not valid')
}

export function validatePassword(password) {
    validateText(password, 'password')
    if (password.length < 8) throw new RangeError('password length is less than 8 characters')
}

export function validateUrl(url, explain) {
    validateText(url, explain)
    if (!url.startsWith('http')) throw new Error (explain + ' is not valid')
}

export function validateNumber(number, explain) {
    if (typeof number !== 'number') throw new TypeError(explain + ' is not a number')
}
