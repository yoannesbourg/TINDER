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
        const body = req.body
        const newDescription = await pool.query("INSERT INTO users (name, photo, birthdate, description) VALUES($1, $2, $3, $4) RETURNING *", [body.name, body.photo, body.birthdate, body.description])
        res.json(newDescription.rows[0])
    } catch (err) {
        console.error(err)
    }
})

// //Get all user 
app.get("/users", async (req, res) => {
    try {
        const { description } = req.query
        const allUsers = await pool.query("SELECT * FROM users")
        res.json(allUsers.rows)
    } catch (error) {
        console.error(error.message)
    }
})

//Get a single user
app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id])
        res.json(user.rows)
    } catch (error) {
        
    }
})

// Delete user
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