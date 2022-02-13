const messages = require("../models/messages.model")

function getMessages(req, res) {
  res.json(messages)
}

function postMessage(req, res) {
  if (!req.body.message) {
    return res.json({Error: "No Data Pass"})
  }
  const newMessage = {message: req.body.message, id: messages.length}
  messages.push(newMessage)
  res.json(newMessage)
}

module.exports = {
  getMessages,
  postMessage,
}
