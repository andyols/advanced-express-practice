let express = require('express')
let contacts = require('../data/contacts')
let router = express.Router()

router.get('/', (req, res) => res.json(contacts))

router.get('/:id', (req, res) => {
  res.json(contacts.find(c => c._id == req.params.id))
})

router.post('/', (req, res) => {
  let newContact = req.body
  if (newContact) {
    newContact._id = contacts[contacts.length - 1]._id + 1
    contacts.push(newContact)
  }
  res.send('success')
})

module.exports = router
