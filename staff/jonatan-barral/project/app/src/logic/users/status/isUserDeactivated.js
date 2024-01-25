import context from '../../context'

function isUserDeactivated() {
    return context.jwt.getStatus() === 'deactivated'
}

export default isUserDeactivated