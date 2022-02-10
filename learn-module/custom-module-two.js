function message(params) {
  return params + " How are you?"
}

function respond(time) {
  const answer = message(time)
  console.log(answer)
}

module.exports = {
  respond,
}
