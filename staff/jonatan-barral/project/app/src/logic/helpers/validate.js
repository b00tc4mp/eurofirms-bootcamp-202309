import { JWTError, ContentError } from "../errors"
import { JWT } from '../../utils'

const validate = {
    text(text, explain) {
        if (typeof text !== 'string') throw new TypeError(explain + ' is not a string')
        if (text.trim().length === 0) throw new ContentError(explain + ' is empty')
    },

    password(password) {
        this.text(password, 'password')

        if (password.length < 8) throw new RangeError('password length is lower than 8')
    },

    number(number, explain) {
        if (typeof number !== 'number') throw new TypeError(explain + ' is not a number')
    },

    function(func, explain) {
        if (typeof func !== 'function') throw new TypeError(explain + ' is not a function')
    },

    jwt(jwt) {
        if (!jwt || !(jwt instanceof JWT)) throw new JWTError('JWT not valid')
        if (jwt.isExpired()) throw new JWTError('JWT expired')
    },

    role(role, explain) {
        this.text(role, explain)

        const allowedRoles = ['administrador', 'secretaria', 'juez', 'juez-c']

        if (!allowedRoles.includes(role)) {
            throw new Error(role + ' is not a valid role')
        }
    }
}

export default validate