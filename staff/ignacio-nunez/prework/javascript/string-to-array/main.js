function stringToArray(string) {
    var arrayResult = []

    for (var i = 0; i < string.length; i++) {
        arrayResult[i] = string[i]
    }

    return arrayResult
}

// CASE Hello, World!

var helloString = 'Hello, World!'

var helloChars = stringToArray(helloString)

console.log(helloChars)

// CASE empty string

var emptyString = ''

var noChars = stringToArray(emptyString)

console.log(noChars)

// CASE blank string (3 spaces)

var blankString = '   '

var spaceChars = stringToArray(blankString)

console.log(spaceChars)