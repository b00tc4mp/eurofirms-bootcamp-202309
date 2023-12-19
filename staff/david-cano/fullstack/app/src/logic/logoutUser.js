import context from "./context";

export default function logoutUser() {
    delete context.storage.token
    context.jwt = null
}

