const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")


//middleware
app.use(cors())
app.use(express.json()) //req.body

//ROUTES

//Create user
app.post("/users", async (req, res) => {
    try {
        console.log(req.body)
    } catch (err) {
        console.error(err)
    }
})

//Get all user 
app.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users")
        res.json(allUsers.rows)
    } catch (error) {
        console.error(error.message)
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000")
})