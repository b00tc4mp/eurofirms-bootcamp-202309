import context from './context'
function isUserManager() {
    return context.jwt.getRole() === 'manager'
}

export default isUserManager