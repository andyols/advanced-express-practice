const express = require('express')
const router = express.Router()

const vehicles = require('../controllers/vehicles')

router.get('/', vehicles.list)
router.get('/:id', vehicles.show)
router.post('/', vehicles.create)

module.exports = router
