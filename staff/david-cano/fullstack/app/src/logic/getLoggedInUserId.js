import context from './context'

export default function getLoggedInUserId() {
    return context.jwt && context.jwt.getSubject()
}
