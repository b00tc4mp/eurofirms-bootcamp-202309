import context from './context'

function getLoggedInUserId() {
    return context.jwt && context.jwt.getSubject()
}

export default getLoggedInUserId