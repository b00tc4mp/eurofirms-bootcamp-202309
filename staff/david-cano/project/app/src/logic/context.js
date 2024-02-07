import JWT from "../utils/JWT"

const context = {
    storage: sessionStorage,
    jwt: null
}

if (context.storage.token)
    context.jwt = new JWT(context.storage.token)

export default context