const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")
const bodyParser = require('body-parser')
const logger = require('morgan')

app.use(logger('dev'))

//middleware
app.use(cors())
app.use(bodyParser.json())



//Helpers
const randomIndex = (arr) => {
    return Math.floor(Math.random() * arr.length)
}

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
        const allUsers = await pool.query("SELECT * FROM users")
        res.json(allUsers.rows)
    } catch (err) {
        console.error(err)
    }
})

//Get a single user
app.get("/users/:id", async (req, res) => {
    try {
        const { id } = req.params
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [id])
        res.json(user.rows)
    } catch (err) {
        console.error(err)
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


//Set liked to true
app.put("/users/:id", async (req, res) => {
    try {
        const { id } = req.params
        const updateTodo = await pool.query("UPDATE users SET liked = true WHERE id = $1", [id])
        res.json('liked')
    } catch (err) {
        console.error(err)
    }
})


//Get random user
app.get("/user", async (req, res) => {
    try {
        //Get ids
        const getAllUsersId = await pool.query("SELECT id FROM users WHERE liked = false")
        const allUsersIds = getAllUsersId.rows

        //Push them into a array
        const ids = allUsersIds.map(item => item.id)
        const randomId = ids[randomIndex(ids)]

        //Select a user
        const user = await pool.query("SELECT * FROM users WHERE id = $1", [randomId])
        res.json(user.rows)

    } catch (err) {
        console.error(err)
        res.json({error: 'error cannot fetch user'})
    }
})


app.listen(5000 || PORT, () => {
    console.log("server has started on port 5000")
})