// Creamos una función llamada 'createErrorClass' que acepta un nombre como entrada.
function createErrorClass(name) {
    // La función devuelve una nueva clase (como un tipo de objeto especial) que hereda de la clase Error (que es un tipo especial de error en JavaScript).
    return class extends Error {
        // Creamos el constructor (como una regla especial) que acepta un mensaje y lo pasa al constructor de la clase Error.
        constructor(message) {
            // Llamamos al constructor de la clase padre (Error) con el mensaje.
            super(message);

            // Configuramos el nombre de la clase de error con el nombre proporcionado.
            this.name = name;
        }
    };
}

// Creamos varias clases de error usando la función 'createErrorClass' y les damos nombres específicos.
const JWTError = createErrorClass('JWTError');
const NotFoundError = createErrorClass('NotFoundError');
const DuplicityError = createErrorClass('DuplicityError');
const ContentError = createErrorClass('ContentError');
const SystemError = createErrorClass('SystemError');
const CredentialsError = createErrorClass('CredentialsError');
const ClearanceError = createErrorClass('ClearanceError');

// Exportamos las clases de error individuales para que otras partes de nuestro programa puedan usarlas.
export {
    JWTError,
    NotFoundError,
    DuplicityError,
    ContentError,
    SystemError,
    CredentialsError,
    ClearanceError
};

// Creamos un objeto llamado 'errors' que contiene todas las clases de error.
const errors = {
    JWTError,
    NotFoundError,
    DuplicityError,
    ContentError,
    SystemError,
    CredentialsError,
    ClearanceError
};

// Exportamos el objeto 'errors' para que otras partes de nuestro programa puedan usar todas las clases de error.
export default errors;
