import context from './context'
function isUserRegular() {
    return context.jwt.getRole() === 'regular'
}

export default isUserRegular