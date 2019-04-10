comments = require('../data/comments')

exports.list = (req, res) => res.json(comments)

exports.show = (req, res) =>
  res.json(comments.find(c => c._id == req.params.id))

exports.create = (req, res) => {
  let newItem = req.body
  if (newItem) {
    newItem._id = comments[comments.length - 1]._id + 1
    comments.push(newItem)
  }
  res.send('success')
}
