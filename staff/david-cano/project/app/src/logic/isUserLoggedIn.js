import context from './context'

function isUserLoggedIn() {
    if (!context.jwt)
        return false

    return true
}

export default isUserLoggedIn