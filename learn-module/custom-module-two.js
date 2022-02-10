function message(params) {
  return params + " How are you?"
}

module.exports = function respond(time) {
  const answer = message(time)
  console.log(answer)
}

// module.exports = {
//   respond,
// }
