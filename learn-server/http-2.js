const http = require("http")

const server = http.createServer()
const PORT = 3030
const friends = [
  {
    id: 1,
    name: "muhammad",
  },
  {
    id: 2,
    name: "ghali",
  },
  {
    id: 3,
    name: "umar",
  },
]
server.on("request", (req, res) => {
  const item = req.url.split("/")

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html")
    res.write("<body><h2>welcome</h2></body>")
    res.end()
  } else if (item[1] === "friends") {
    res.setHeader("Content-Type", "application/json")

    if (item.length === 3) {
      const friendIndex = +item[2]
      res.end(JSON.stringify(friends[friendIndex]))
    } else {
      res.end(JSON.stringify(friends))
    }
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
