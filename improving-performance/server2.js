const express = require("express")

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

console.log("Worker process started")
app.listen(3000, () => console.log(`server started`))
