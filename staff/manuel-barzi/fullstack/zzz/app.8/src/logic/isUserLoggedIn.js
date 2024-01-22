import context from './context'

function isUserLoggedIn() {
    if (!context.jwt || context.jwt.isExpired()) {
        delete context.storage.token

        context.jwt = null

        return false
    }

    return true
}

export default isUserLoggedIn
