// Define una clase 'NotFoundError' que hereda de la clase base 'Error'
class NotFoundError extends Error {
    // Constructor de la clase que recibe un mensaje y lo pasa al constructor de la clase base
    constructor(message) {
        super(message)

        // Establece el nombre de la clase como el nombre del constructor
        this.name = this.constructor.name
    }
}

// Define una clase 'DuplicityError' que hereda de la clase base 'Error'
class DuplicityError extends Error {
    // Constructor de la clase que recibe un mensaje y lo pasa al constructor de la clase base
    constructor(message) {
        super(message)

        // Establece el nombre de la clase como el nombre del constructor
        this.name = this.constructor.name
    }
}

// Define una clase 'ContentError' que hereda de la clase base 'Error'
class ContentError extends Error {
    // Constructor de la clase que recibe un mensaje y lo pasa al constructor de la clase base
    constructor(message) {
        super(message)

        // Establece el nombre de la clase como el nombre del constructor
        this.name = this.constructor.name
    }
}

// Define una clase 'SystemError' que hereda de la clase base 'Error'
class SystemError extends Error {
    // Constructor de la clase que recibe un mensaje y lo pasa al constructor de la clase base
    constructor(message) {
        super(message)

        // Establece el nombre de la clase como el nombre del constructor
        this.name = this.constructor.name
    }
}

// Define una clase 'CredentialsError' que hereda de la clase base 'Error'
class CredentialsError extends Error {
    // Constructor de la clase que recibe un mensaje y lo pasa al constructor de la clase base
    constructor(message) {
        super(message)

        // Establece el nombre de la clase como el nombre del constructor
        this.name = this.constructor.name
    }
}

// Define una clase 'ClearanceError' que hereda de la clase base 'Error'
class ClearanceError extends Error { // authorization, permission, ...
    // Constructor de la clase que recibe un mensaje y lo pasa al constructor de la clase base
    constructor(message) {
        super(message)

        // Establece el nombre de la clase como el nombre del constructor
        this.name = this.constructor.name
    }
}

// Exporta las clases de errores para poder utilizarlas en otros archivos
module.exports = {
    NotFoundError,
    DuplicityError,
    ContentError,
    SystemError,
    CredentialsError,
    ClearanceError
}
