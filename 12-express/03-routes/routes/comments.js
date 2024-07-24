const express = require('express')
const {
    getCommentsHandler,
    getSingleCommentHandler,
    postCommentsHandler,
    deleteSingleCommentHandler,
} = require('../controllers/comments')

const router = express.Router()

router.get('/', getCommentsHandler)
router.post('/', postCommentsHandler)
router.delete('/:commentId', deleteSingleCommentHandler)
router.get('/:commentId', getSingleCommentHandler)

module.exports = router
