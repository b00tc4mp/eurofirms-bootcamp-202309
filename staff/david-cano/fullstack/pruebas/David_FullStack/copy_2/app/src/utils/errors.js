class JWTError extends Error {
    constructor(message) {
        super(message)

        this.name = this.constructor.name
    }
}

export {
    JWTError
}