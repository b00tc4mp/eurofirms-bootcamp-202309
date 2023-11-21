
// Checks if the input email is a valid email format, and prevents for empty inputs

function validateText(text, explain) {
    if (typeof text !== "string") throw new TypeError(explain + " is not a string")
    if (text.trim().length === 0) throw new Error(explain + " is empty")
}

function validateEmail(email) {
    validateText(email, "email")
    if (!email.includes("@")) throw new Error("email is not valid")
    if (!email.includes(".")) throw new Error("email is not valid")
}

//Password must have >8 characters in order to be validated

function validatePassword(password) {
    validateText(password, "password")
    if (password.length < 8) throw new RangeError("password length is lower than 8")
}

//Checks if the image url is valid
function validateUrl(url, explain) {
    validateText(url, explain)
    if (!url.startsWith("http")) throw new Error(explain + " is not valid")
}

function validateNumber(number, explain) {
    if (typeof number !== "number") throw new TypeError(explain + " is not a number")
}