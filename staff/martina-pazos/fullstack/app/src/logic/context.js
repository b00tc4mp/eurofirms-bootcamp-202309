import JWT from '../utils/jwt'

const context = {
    storage: sessionStorage,
    jwt: null
}

if (context.storage.token)
    context.jwt = new JWT(context.storege.token)

export default context 