let express = require('express')
let products = require('../data/products')
let router = express.Router()

router.get('/', (req, res) => {
  console.log(products)
  res.json(products)
})

router.get('/:id', (req, res) => {
  res.json(products.find(c => c._id == req.params.id))
})

router.post('/', (req, res) => {
  let newProduct = req.body
  if (newProduct) {
    newProduct._id = products[products.length - 1]._id + 1
    products.push(newProduct)
  }
  res.send('success')
})

module.exports = router
