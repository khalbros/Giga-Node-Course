const fs = require("fs")
const path = require("path")
const {parse} = require("csv-parse")

const planets = []

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  )
}

async function loadPlanets() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(path.join(__dirname, "..", "..", "data", "kepler.csv"))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          planets.push(data)
        }
      })
      .on("error", (error) => {
        console.log(error)
        reject()
      })
      .on("end", () => {
        resolve()
      })
  })
}

function getPlanets() {
  return planets
}

module.exports = {loadPlanets, getPlanets}
