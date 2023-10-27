function validateText(text, explain) {
    if (typeof text !== 'string') throw new TypeError(explain + ' is not a string')
    if (text.trim().length === 0) throw new Error(explain + ' is empty')
}

function validateEmail(email) {
    validateText(email, 'email');
    var atIndex = email.indexOf('@')
    var dotIndex = email.lastIndexOf('.')

    if (atIndex === -1) {
        throw new Error('Email is not valid: Missing "@" symbol');
    } else if (dotIndex === -1) {
        throw new Error('Email is not valid: Missing "." symbol');
    } else if (atIndex >= dotIndex) {
        throw new Error('Email is not valid: "@" should appear before "."');
    }

    var username = email.slice(0, atIndex);
    var domain = email.slice(atIndex + 1, dotIndex);
    var topLevelDomain = email.slice(dotIndex + 1);

    if (username.length === 0) {
        throw new Error('Email is not valid: Username is missing');
    } else if (domain.length === 0) {
        throw new Error('Email is not valid: Domain is missing');
    } else if (topLevelDomain.length === 0) {
        throw new Error('Email is not valid: Top-level domain is missing')
    }
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