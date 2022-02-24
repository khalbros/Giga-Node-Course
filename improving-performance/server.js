const express = require("express")
const cluster = require("cluster")
const os = require("os")

const app = express()

function delay(duration) {
  const startTime = Date.now()
  while (Date.now() - startTime < duration) {
    // console.log(startTime)
  }
}

app.get("/", (req, res) => {
  res.send("example one " + process.pid)
})
app.get("/timer", (req, res) => {
  delay(9000)
  res.send("example timer " + process.pid)
})

if (cluster.isMaster) {
  console.log("Master process started")
  const num = os.cpus().length
  for (let index = 0; index < num; index++) {
    cluster.fork()
  }
} else {
  console.log("Worker process started")
  app.listen(3000, () => console.log(`server started`))
}
