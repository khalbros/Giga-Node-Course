const express = require("express")
const friendsRouter = require("./routes/friemds.router")
const messagesRouter = require("./routes/messages.router")

const app = express()
app.use(express.json())

app.use("/friends", friendsRouter)
app.use("/messages", messagesRouter)

app.listen(1000, console.log("server started"))
