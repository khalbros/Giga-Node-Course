const https = require("https")
const path = require("path")
const fs = require("fs")
const express = require("express")
const helmet = require("helmet")
const passport = require("passport")
const cookieSession = require("cookie-session")
const {Strategy} = require("passport-google-oauth20")
require("dotenv").config()

const port = process.env.PORT || 3000

const config = {
  CLIENT_ID: process.env.CLIENT_ID,
  CLIENT_SECRET: process.env.CLIENT_SECRET,
  COOKIE_KEY: process.env.COOKIE_KEY,
}

const AuthOption = {
  callbackURL: "/auth/google/callback",
  clientID: config.CLIENT_ID,
  clientSecret: config.CLIENT_SECRET,
}

function verifyCallback(accessToken, refreshToken, profile, done) {
  console.log("Google Profile: ", profile)
  done(null, profile)
}

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((obj, done) => {
  done(null, obj)
})

passport.use(new Strategy(AuthOption, verifyCallback))
const app = express()

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.COOKIE_KEY],
  })
)
app.use(helmet())
app.use(passport.initialize())
app.use(passport.session())

function checkLoggedIn(req, res, next) {
  const isLoggedIn = req.user
  if (!isLoggedIn) {
    return res.status(401).json({error: "you must login"})
  }
  next()
}

app.get("/auth/google", passport.authenticate("google", {scope: ["email"]}))

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/failure",
    successRedirect: "/secret",
    session: true,
  }),
  (req, res) => {
    console.log("Google Callback")
  }
)

app.get("/auth/logout", (req, res) => {
  req.logout()
  return res.redirect("/")
})

app.get("/secret", checkLoggedIn, (req, res) => {
  return res.send("Your personal Key is 12!")
})

app.get("/failure", (req, res) => {
  return res.send("fail to login")
})
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})

https
  .createServer(
    {
      key: fs.readFileSync("key.pem"),
      cert: fs.readFileSync("cert.pem"),
    },
    app
  )
  .listen(port, () => console.log("Server Running on Port:" + port))
