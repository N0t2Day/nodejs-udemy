const { post } = require('../routes/comments')

const getUsersHandler = (req, res) => {
    res.send('Get users route')
}

const getSingleUserHandler = (req, res) => {
    res.send(`Get user route. User id ${req.params.userId}`)
}

const postUsersHandler = (req, res) => {
    res.send('Post users handler')
}

module.exports = {
    getUsersHandler,
    getSingleUserHandler,
    postUsersHandler,
}
