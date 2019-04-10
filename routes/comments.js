const express = require('express')
const router = express.Router()

const comments = require('../controllers/comments')

router.get('/', comments.list)
router.get('/:id', comments.show)
router.post('/', comments.create)

module.exports = router
