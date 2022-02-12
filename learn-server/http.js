const http = require("http")

const server = http.createServer((req, res) => {
  // 200 => Status code
  res.writeHead(200, {
    "Content-Type": "text/plain",
  })
  res.end("Hello! This is my firt HTTP server")
})
// 3000 => Port number
server.listen(3030, () => console.log("Server running on port:3030"))
