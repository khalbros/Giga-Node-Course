const friends = require("../models/friends.model")

function getFriends(req, res) {
  res.json(friends)
}

function getFriend(req, res) {
  const friendID = req.params.friendID
  res.json(friends[friendID])
}
function postFriend(req, res) {
  if (!req.body.name) {
    return res.json({Error: "No Data Pass"})
  }
  const newFriend = {name: req.body.name, id: friends.length}
  friends.push(newFriend)
  res.json(newFriend)
}

module.exports = {
  getFriend,
  getFriends,
  postFriend,
}
