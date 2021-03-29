const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")
const bodyParser = require('body-parser')

//middleware
app.use(cors())
// app.use(express.json()) //req.body
app.use(bodyParser.json())

//ROUTES

//Create user
app.post("/users", async (req, res) => {
    try {
        const { description } = req.body
        // const newDescription = await pool.query("INSERT INTO users (description) VALUES($1) RETURNING *", [description])
        // res.json(newDescription.rows[0])
        console.log(req)
    } catch (err) {
        console.error(err)
    }
})

//Get all user 
app.get("/users", async (req, res) => {
    try {
        const { description } = req.body
        const allUsers = await pool.query("SELECT * FROM users")
        res.json(allUsers.rows)
        console.log(description)
    } catch (error) {
        console.error(error.message)
    }
})

//Delete user
app.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteTodo = await pool.query("DELETE FROM users WHERE id = $1", [id])
        res.json("User was deleted")
    } catch (err) {
        console.error(err)
    }
})


app.listen(5000, () => {
    console.log("server has started on port 5000")
})