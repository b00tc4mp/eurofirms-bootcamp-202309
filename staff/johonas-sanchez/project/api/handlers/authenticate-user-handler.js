const jwt = require("jsonwebtoken")

const logic = require("../logic")
const { ContentError, CredentialsError } = require("../logic/errors")

module.exports = (req, res) => {
   try {
      const { email, password } = req.body

      logic.authenticateUser(email, password)
         .then((user) => {
            // const token = jwt.sign({ sub: userId }, "es posible que pronto sea abuelo", { expiresIn: '10s' }  ) // Ponemos la fecha de expiración del token
            const token = jwt.sign({ sub: user.id, role: user.role }, process.env.JWT_SECRET )

            res.json(token)
         })
         .catch(error => {
            let status = 500

            if (error instanceof CredentialsError) status = 401

            res.status(status).json({ error: error.constructor.name, message: error.message })
         })
   } catch (error) {
      let status = 500

      if (error instanceof TypeError || error instanceof ContentError || error instanceof RangeError) status = 406

      res.status(status).json({ error: error.constructor.name, message: error.message })
   }
}
