const express = require('express')
const contacts = require('./routes/contacts')
const comments = require('./routes/comments')
const products = require('./routes/products')
const vehicles = require('./routes/vehicles')

const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.use('/contacts', contacts)
app.use('/comments', comments)
app.use('/products', products)
app.use('/vehicles', vehicles)

const port = process.env.PORT || 4001
app.listen(port, () => {
  console.log('Web server is now listening for messages on port', port)
})
