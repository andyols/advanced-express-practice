let express = require('express')
let comments = require('./comments')
let products = require('./products')
let vehicles = require('./vehicles')
let contacts = require('./contacts')

const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

// Get all
app.get('/contacts', (req, res) => res.json(contacts))
app.get('/comments', (req, res) => res.json(comments))
app.get('/products', (req, res) => res.json(products))
app.get('/vehicles', (req, res) => res.json(vehicles))

// Get by id
app.get('/contacts/:id', (req, res) => {
  res.json(contacts.find(c => c._id == req.params.id))
})
app.get('/comments/:id', (req, res) => {
  res.json(comments.find(c => c._id == req.params.id))
})
app.get('/products/:id', (req, res) => {
  res.json(products.find(p => p._id == req.params.id))
})
app.get('/vehicles/:id', (req, res) => {
  res.json(vehicles.find(v => v._id == req.params.id))
})

// Create one
app.post('/contacts', (req, res) => {
  let newContact = req.body
  if (newContact) contacts.push(newContact)
  res.send('success')
})
app.post('/comments', (req, res) => {
  let newComment = req.body
  if (newComment) comments.push(newComment)
  res.send('success')
})
app.post('/products', (req, res) => {
  let newProduct = req.body
  if (newProduct) products.push(newProduct)
  res.send('success')
})
app.post('/vehicles', (req, res) => {
  let newVehicle = req.body
  if (newVehicle) vehicles.push(newVehicle)
  res.send('success')
})

const port = process.env.PORT || 4001
app.listen(port, () => {
  console.log('Web server is now listening for messages on port', port)
})
