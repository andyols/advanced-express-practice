const products = require('../data/products')

exports.list = (req, res) => res.json(products)

exports.show = (req, res) =>
  res.json(products.find(c => c._id == req.params.id))

exports.create = (req, res) => {
  let newItem = req.body
  if (newItem) {
    newItem._id = products[products.length - 1]._id + 1
    products.push(newItem)
  }
  res.send('success')
}
