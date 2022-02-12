const http = require("http")

const server = http.createServer()
const PORT = 3030
server.on("request", (req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html")
    res.write("<body><h2>welcome</h2></body>")
    res.end()
  } else if (req.url === "/friends") {
    res.setHeader("Content-Type", "application/json")
    res.end(
      JSON.stringify({
        id: 1,
        name: "khalbros",
      })
    )
  } else if (req.url === "/list") {
    res.setHeader("Content-Type", "text/html")
    res.write(
      "<body><ul><li>List One</li> <li>List Two</li> <li>List Three</li> <li>List Four</li></ul></body>"
    )
    res.end()
  } else {
    res.statusCode = 400
    res.end()
  }
})
server.listen(PORT, () => console.log(`Server Running On Port:${PORT}`))
