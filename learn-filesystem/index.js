const {parse} = require("csv-parse")
const fs = require("fs")

const result = []

fs.createReadStream("Book3.csv")
  .pipe(
    parse({
      commet: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    {
      result.push(data)
    }
  })
  .on("error", (error) => {
    console.log(error)
  })
  .on("end", () => {
    console.log(result)
    console.log("Done Reading File")
  })
