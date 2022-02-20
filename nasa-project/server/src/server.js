const http = require("http")
const app = require("./app")
const {loadPlanets} = require("./models/planets.model")

const server = http.createServer(app)
const PORT = process.env.PORT || 4000

async function startServer() {
  await loadPlanets()
  server.listen(PORT, () => console.log(`Server runing on port:${PORT}`))
}

startServer()
