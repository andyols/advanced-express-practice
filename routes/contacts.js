const express = require('express')
const router = express.Router()

const contacts = require('../controllers/contacts')

router.get('/', contacts.list)
router.get('/:id', contacts.show)
router.post('/', contacts.create)

module.exports = router
