let express = require('express')
let comments = require('../data/comments')
let router = express.Router()

router.get('/', (req, res) => res.json(comments))

router.get('/:id', (req, res) => {
  res.json(comments.find(c => c._id == req.params.id))
})

router.post('/', (req, res) => {
  let newComment = req.body
  if (newComment) {
    newComment._id = comments[comments.length - 1]._id + 1
    comments.push(newComment)
  }
  res.send('success')
})

module.exports = router
