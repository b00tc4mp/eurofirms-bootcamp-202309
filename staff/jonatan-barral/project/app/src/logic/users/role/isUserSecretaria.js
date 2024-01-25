import context from '../../context'

function isUserSecretaria() {
    return context.jwt.getRole() === 'secretaria'
}

export default isUserSecretaria