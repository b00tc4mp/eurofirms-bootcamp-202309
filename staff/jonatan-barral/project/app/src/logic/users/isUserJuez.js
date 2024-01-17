import context from '../context'
function isUserJuez() {
    return context.jwt.getRole() === 'juez'
}

export default isUserJuez