const logic = require('../logic')

module.exports = (req, res) => {
    try {
            logic.retrieveProducts((error, products) => {
            if (error) {
                let status = 500

                res.status(status).json({ error: error.constructor.name, message: error.message })

                return
            }

            res.json(products)
        })
    } catch (error) {
        let status = 500

        res.status(status).json({ error: error.constructor.name, message: error.message })
    }
}