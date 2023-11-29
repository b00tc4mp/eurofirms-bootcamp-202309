const { validateText, validateFunction } = require ('./helpers/validators')
const { User, Post } = require('../data/models')
function retrieveSavedPosts(userId, callback) {
    validateText(userId, 'userId')
    validateF
}