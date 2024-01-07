function createErrorClass(name) {
    return class extends Error {
        constructor(message) {
            super(message)

            this.name = name
        }
    }
}

const JWTError = createErrorClass('JWTError')
const NotFoundError = createErrorClass('NotFoundError')
const DuplicityError = createErrorClass('DuplicityError')
const ContentError = createErrorClass('ContentError')
const SystemError = createErrorClass('SystemError')
const CredentialsError = createErrorClass('CredentialsError')
const ClearanceError = createErrorClass('ClearanceError')

export {
    JWTError,
    NotFoundError,
    DuplicityError,
    ContentError,
    SystemError,
    CredentialsError,
    ClearanceError
}

const errors = {
    JWTError,
    NotFoundError,
    DuplicityError,
    ContentError,
    SystemError,
    CredentialsError,
    ClearanceError
}

export default errors