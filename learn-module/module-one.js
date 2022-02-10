const https = require("https")

const req = https.request("https://mern-todo-tracker.herokuapp.com", (res) => {
  res.on("data", (chunk) => {
    console.log("Data recieved: " + chunk)
  })
  res.on("end", () => {
    console.log("No more Data")
  })
})

req.end()
