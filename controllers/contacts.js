contacts = require('../data/contacts')

exports.list = (req, res) => res.json(contacts)

exports.show = (req, res) =>
  res.json(contacts.find(c => c._id == req.params.id))

exports.create = (req, res) => {
  let newItem = req.body
  if (newItem) {
    newItem._id = contacts[contacts.length - 1]._id + 1
    contacts.push(newItem)
  }
  res.send('success')
}
