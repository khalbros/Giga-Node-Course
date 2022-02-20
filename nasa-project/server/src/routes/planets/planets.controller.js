const {getPlanets} = require("../../models/planets.model")

function getAllPlanets(req, res) {
  // const planets = getPlanets()
  // console.log(planets)
  return res.status(200).json(getPlanets())
}

module.exports = getAllPlanets
