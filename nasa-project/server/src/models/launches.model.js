const launches = require("./launches.mongo")
const planets = require("./planets.mongo")
var DefualtFlightNumber = 100

const launch = {
  flightNumber: 100,
  mission: "Kepler Expoloratiom",
  rocket: "Explorer IS2",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
}

// launches.set(launch.flightNumber, launch)
saveLaunches(launch)

async function getLaunches() {
  return await launches.find({}, {__v: 0})
}

async function saveLaunches(launch) {
  const planet = await planets.findOne({keplerName: launch.target})
  if (!planet) {
    throw new Error("Invalide Planet")
  }

  await launches.findOneAndUpdate({flightNumber: launch.flightNumber}, launch, {
    upsert: true,
  })
}

async function getLatestFlightNumber() {
  const lastFlightNumber = await launches.findOne().sort("-flightNumber")
  if (!lastFlightNumber) {
    return DefualtFlightNumber
  }
  return lastFlightNumber.flightNumber
}

async function addNewLaunch(launch) {
  const latestFlightNumber = await getLatestFlightNumber()
  const newLaunch = Object.assign(launch, {
    flightNumber: Number(latestFlightNumber) + 1,
    success: true,
    upcoming: true,
    customers: ["ZTM", "NASA"],
  })
  await saveLaunches(newLaunch)
}

async function existLaunch(id) {
  return await launches.findOne({flightNumber: id})
}

async function deleteLaunch(id) {
  const aborted = await launches.updateOne(
    {flightNumber: id},
    {upcoming: false, success: false}
  )
  return aborted
}

module.exports = {
  launches,
  getLaunches,
  addNewLaunch,
  existLaunch,
  deleteLaunch,
}
