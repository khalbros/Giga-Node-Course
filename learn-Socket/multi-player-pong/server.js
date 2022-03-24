const server = require("http").createServer()
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
})
const port = 3000
let readyPlayerCount = 0
server.listen(port, () => console.log(`Server on PORT: ${port}`))

io.on("connection", (socket) => {
  console.log("a user connected", socket.id)
  socket.on("ready", () => {
    console.log("Player ready", socket.id)
    readyPlayerCount++
    if (readyPlayerCount % 2 === 0) {
      io.emit("startGame", socket.id)
    }
  })
  socket.on("paddleMove", (paddleData) => {
    socket.broadcast.emit("paddleMove", paddleData)
  })
  socket.on("ballMove", (ballData) => {
    socket.broadcast.emit("ballMove", ballData)
  })
  socket.on("disconnect", (reason) => {
    console.log(`Player ${socket.id} Disconnected: ${reason}`)
  })
})
