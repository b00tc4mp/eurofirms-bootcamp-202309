const cors = (req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Methods', '*')
    res.header('Acess-Control-Allow-Headers', 'Authorization, *')

    next()
}

module.exports = cors