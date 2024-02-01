import context from '../../context'

function isUserStarting() {
    return context.jwt.getStatus() === 'starting'
}

export default isUserStarting