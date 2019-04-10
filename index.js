const express = require('express')
const contactsRoute = require('./routes/contacts')
const commentsRoute = require('./routes/comments')
const productsRoute = require('./routes/products')
const vehiclesRoute = require('./routes/vehicles')

const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(express.static('public'))

app.use('/contacts', contactsRoute)
app.use('/comments', commentsRoute)
app.use('/products', productsRoute)
app.use('/vehicles', vehiclesRoute)

const port = process.env.PORT || 4001
app.listen(port, () => {
  console.log('Web server is now listening for messages on port', port)
})
