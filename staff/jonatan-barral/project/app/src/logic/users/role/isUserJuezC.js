import context from '../../context'

function isUserJuezC() {
    return context.jwt.getRole() === 'juez-c'
}

export default isUserJuezC