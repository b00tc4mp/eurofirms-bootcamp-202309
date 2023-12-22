const jwt = require('jsonwebtoken')

const logic = require('../logic')
const { ContentError, CredentialsError } = require('../logic/errors')

module.exports = (req, res) => {
    try {
        const { email, password } = req.body

        logic.authenticateUser(email, password, (error, userId) => {
            if (error) {
                let status = 500

                if (error instanceof CredentialsError)
                    status = 401

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            const token = jwt.sign({ sub: userId }, process.env.JWT_SECRET, { expiresIn: '1m' })

            res.json(token)
        })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}