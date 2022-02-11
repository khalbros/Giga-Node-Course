const {read, send} = require("./internal/")

send("www.google.com", "Google Page")
read("www.google.com", "Google Page")
