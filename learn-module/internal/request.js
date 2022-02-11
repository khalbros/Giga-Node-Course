function message(url) {
  return `Request URL: ${url}, `
}

function send(url, data) {
  const requestMessage = message(url)
  console.log(`${requestMessage} Request Data: ${data}`)
}

module.exports = {
  send,
}
