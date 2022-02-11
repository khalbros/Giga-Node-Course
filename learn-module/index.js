const Axios = require("axios")

Axios.get("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => {
    console.log(res.data)
  })
  .catch((err) => {
    console.log(err.message)
  })
