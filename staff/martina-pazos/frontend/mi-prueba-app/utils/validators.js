// creamos una function para recoger las condiciones para registrarse y logarse. explain en ingles significa explicación
function validateText(text, explain) {
    if (typeof text !== "string") throw new TypeError(explain + " is not string")
    if (text.trim().length === 0) throw new Error(explain + " is empty")
}

function validateEmail(email) {
    validateText(email, "email")

    if (!email.includes("@")) throw new Error("email is not valid")
    if (!email.includes(".")) throw new Error("email is not valid")
}

function validatePassword(password) {
    validateText(password, "password")

    if (password.length < 8) throw new RangeError("password length is lower than 8")
}

function validateUrl(url, explain) {
    validateText(url, explain)
    //startswith significa q comience por...en este caso http
    if (!url.startsWith("http")) throw new Error(explain + "is not valid")
}