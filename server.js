const express = require('express')

const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send("Welcome to the days of the week in French.")
})

app.get('/monday', (req, res) => {
    res.json({
        "English": "Monday",
        "weekday": 1,
        "French": "Lundi"
    })
})

app.get('/tuesday', (req, res) => {
    res.json({
        "English": "Tuesday",
        "weekday": 2,
        "French": "Mardi"
    })
})

app.get('/wednesday', (req, res) => {
    res.json({
        "English": "Wednesday",
        "weekday": 3,
        "French": "Mercredi"
    })
})

app.get('/thursday', (req, res) => {
    res.json({
        "English": "Thursday",
        "weekday": 4,
        "French": "Jeudi"
    })
})

app.get('/friday', (req, res) => {
    res.json({
        "English": "Friday",
        "weekday": 5,
        "French": "Vendredi"
    })
})

app.get('/saturday', (req, res) => {
    res.json({
        "English": "Saturday",
        "weekday": 6,
        "French": "Samedi"
    })
})

app.get('/sunday', (req, res) => {
    res.json({
        "English": "Sunday",
        "weekday": 7,
        "French": "Dimanche"
    })
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})