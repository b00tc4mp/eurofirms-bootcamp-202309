const jwt = require('jsonwebtoken')

const logic = require('../logic')
const { ContentError, NotFoundError } = require('../logic/errors')

module.exports = (req, res) => {
    const userId = req.headers.authorization.slice(7) // Para que nos quede el userId sin el Bearer
    const postId = req.params.postId

    try {
       logic.retrievePost(userId, postId, (error, post) => {
          if (error) {
             let status = 500

             if (error instanceof NotFoundError) status = 404

             res.status(status).json({ error: error.constructor.name, message: error.message })

             return
          }

          res.json(post)
       })
    } catch (error) {
       let status = 500

       if (error instanceof TypeError || error instanceof ContentError) status = 406
       else if (error instanceof jwt.JsonWebTokenError) status = 401

       res.status(status).json({ error: error.constructor.name, message: error.message })
    }
 }