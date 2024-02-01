const jwt = require('jsonwebtoken')

const logic = require('../logic')
const { ClearanceError, NotFoundError, SistemError } = require('../logic/errors')

module.exports = (req, res) => {
    try {
        const token = req.headers.authorization.slice(7)

        const { sub: userId } = jwt.verify(token, process.env.JWT_SECRET)

        const { startdate, enddate, location } = req.body

        logic.createCompetition(userId, startdate, enddate, location)
            .then(() => res.status(201).send())
            .catch(error => {
                let status = 500

                if (error instanceof ClearanceError || error instanceof NotFoundError)
                    status = 409

                res.status(status).json({ error: error.constructor.name, message: error.message })
            })
    } catch (error) {
        let status = 500

        if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError)
            status = 406

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}