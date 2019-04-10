let express = require('express')
let vehicles = require('../data/vehicles')
let router = express.Router()

router.get('/', (req, res) => res.json(vehicles))

router.get('/:id', (req, res) => {
  res.json(vehicles.find(c => c._id == req.params.id))
})

router.post('/', (req, res) => {
  let newVehicle = req.body
  if (newVehicle) {
    newVehicle._id = vehicles[vehicles.length - 1]._id + 1
    vehicles.push(newVehicle)
  }
  res.send('success')
})

module.exports = router
