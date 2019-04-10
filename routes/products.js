const express = require('express')
const router = express.Router()

const products = require('../controllers/products')

router.get('/', products.list)
router.get('/:id', products.show)
router.post('/', products.create)

module.exports = router
