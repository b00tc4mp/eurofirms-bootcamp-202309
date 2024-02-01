import context from '../../context'

function isUserActivated() {
    return context.jwt.getStatus() === 'activated'
}

export default isUserActivated