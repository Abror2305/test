const express = require("express")
require("dotenv").config()

const app = express()

app.get("/", (req, res) => {
    res.send("Hello Github Actions")
})

app.listen(process.env.PORT,() => console.log("Server is running at *"+process.env.PORT))