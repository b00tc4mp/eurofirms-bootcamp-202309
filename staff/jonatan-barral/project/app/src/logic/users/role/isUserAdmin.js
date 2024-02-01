import context from '../../context'

function isUserAdmin() {
    return context.jwt.getRole() === 'administrador'
}

export default isUserAdmin