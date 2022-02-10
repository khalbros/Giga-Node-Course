function message(time) {
  return "Good " + time
}

function greet(time, person) {
  const greeting = message(time)
  console.log(`${greeting} ${person}`)
}

module.exports = {greet}
