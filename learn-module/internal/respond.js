function message(url) {
  return `Respond URL: ${url}, `
}

function read(url, data) {
  const respondMessage = message(url)
  console.log(`${respondMessage} Responds Data: ${data}`)
}

module.exports = {
  read,
}
