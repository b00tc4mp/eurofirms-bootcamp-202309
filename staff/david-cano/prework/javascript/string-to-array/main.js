function stringToArray(string) {
    for( var i = 0; i <= string.length; i++){
        return string.split("");
    }
}

// CASE Hello, World!

var helloString = 'Hello, World!';

var helloChars = stringToArray(helloString);

console.log(helloChars);

// CASE empty string

var emptyString = "";

var noChars = stringToArray(emptyString);

console.log(noChars);

// CASE blank string (3 spaces)

var blankString = '   ';

var spaceChars = stringToArray(blankString);

console.log(spaceChars);