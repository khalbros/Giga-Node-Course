const {
  getLaunches,
  addNewLaunch,
  existLaunch,
  deleteLaunch,
} = require("../../models/launches.model")

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getLaunches())
}
function httpDeleteLaunches(req, res) {
  const launchID = Number(req.params.id)
  if (!existLaunch(launchID)) {
    return res.status(404).json({
      Error: "Launch not found",
    })
  }
  const aborted = deleteLaunch(launchID)
  return res.status(200).json(aborted)
}

function httpAddNewLaunch(req, res) {
  const launch = req.body
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({Error: "Some values are missing"})
  }
  launch.launchDate = new Date(launch.launchDate)
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({Error: "Invalid date"})
  }
  addNewLaunch(launch)
  res.status(201).json(launch)
}

module.exports = {httpGetAllLaunches, httpAddNewLaunch, httpDeleteLaunches}
