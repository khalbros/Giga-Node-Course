const launches = new Map()
var latestFlightNumber = 100

const launch = {
  flightNumber: 100,
  mission: "Kepler Expoloratiom",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
}

launches.set(launch.flightNumber, launch)

function getLaunches() {
  return Array.from(launches.values())
}

function addNewLaunch(launch) {
  latestFlightNumber++
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      success: true,
      upcoming: true,
      customers: ["ZTM", "NASA"],
    })
  )
}

function existLaunch(id) {
  return launches.has(id)
}

function deleteLaunch(id) {
  const aborted = launches.get(id)
  aborted.upcoming = false
  aborted.success = false
  return aborted
}

module.exports = {
  launches,
  getLaunches,
  addNewLaunch,
  existLaunch,
  deleteLaunch,
}
