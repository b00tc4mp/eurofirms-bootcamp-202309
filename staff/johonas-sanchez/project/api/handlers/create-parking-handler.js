const logic = require('../logic')
const { ContentError, DuplicityError } = require('../logic/errors')

module.exports = (req, res) => {
    try {
       const { lat, long} = req.body

       logic.createParking(lat, long)
       .then(() => res.status(201).send())
       .catch(error => {
             let status = 500

             if (error instanceof DuplicityError) status = 409

             res.status(status).json({ error: error.constructor.name, message: error.message })
       })
    } catch (error) {
       let status = 500

       if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError) status = 406

       res.status(status).json({ error: error.constructor.name, message: error.message })
    }
 }