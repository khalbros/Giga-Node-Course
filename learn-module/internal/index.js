// const request = require("./request")
// const respond = require("./respond")

// module.exports = {
//   send: request.send,
//   read: respond.read,
// }

// OR to require and export the whole file

// module.exports = {
//   request: require("./request"),
//   respond: require("./respond"),
// }

// OR use the spread opration

module.exports = {
  ...require("./request"),
  ...require("./respond"),
}
