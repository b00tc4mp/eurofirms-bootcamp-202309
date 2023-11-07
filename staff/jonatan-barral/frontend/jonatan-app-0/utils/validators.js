function validateText(text, explain) {
    if (typeof text !== 'string') throw new TypeError(explain + ' is not a string')
    if (text.trim().length === 0) throw new Error(explain + ' is empty')
}

function validateEmail(email) {
    validateText(email, 'email');
    var atIndex = email.indexOf('@')
    var dotIndex = email.lastIndexOf('.')

    var isInvalidEmail = atIndex === -1 || dotIndex === -1 || atIndex > dotIndex

    if (isInvalidEmail) throw new Error('Invalid email format')

    var username = email.slice(0, atIndex);
    var domain = email.slice(atIndex + 1, dotIndex);
    var topLevelDomain = email.slice(dotIndex + 1);

    var isInvalidEmailFormat = username.length < 3 || domain.length < 2 || topLevelDomain.length < 2

    if (isInvalidEmailFormat) throw new Error('Invalid email format')
}



function validatePassword(password) {
    validateText(password, 'password')
    if (password.length < 8) throw new RangeError('password length is lower than 8')

    var symbols = '@,.!?#$%&/'
    var letters = 'abcdefghijklmnñopqrstuvwxyz'
    var capitalLetters = letters.toUpperCase()
    var numbers = '0123456789'

    var validChars = letters + capitalLetters + numbers + symbols

    var includesSymbol, includesLetter, includesCapitalLetter, includesNumber

    for (let i = 0; i < password.length; i++) {
        let char = password[i]

        if (!validChars.includes(char)) throw new Error('invalid character ' + char)

        if (!includesSymbol && symbols.includes(char)) includesSymbol = true
        else if (!includesLetter && letters.includes(char)) includesLetter = true
        else if (!includesCapitalLetter && capitalLetters.includes(char)) includesCapitalLetter = true
        else if (!includesNumber && numbers.includes(char)) includesNumber = true
    }

    if (!includesSymbol || !includesLetter || !includesCapitalLetter || !includesNumber) throw new Error('invalid password')
}

function validateUrl(url, explain) {
    validateText(url, explain)
    if (!url.startsWith('http')) throw new Error(explain + ' is not valid')
}