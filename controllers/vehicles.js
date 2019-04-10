const vehicles = require('../data/vehicles')

exports.list = (req, res) => res.json(vehicles)

exports.show = (req, res) =>
  res.json(vehicles.find(c => c._id == req.params.id))

exports.create = (req, res) => {
  let newItem = req.body
  if (newItem) {
    newItem._id = vehicles[vehicles.length - 1]._id + 1
    vehicles.push(newItem)
  }
  res.send('success')
}
