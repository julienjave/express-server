const express = require('express')

const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
    res.send("Welcome to the days of the week in French.")
})

app.get('/monday', (req, res) => {
    res.send(`Monday is the first day of the week and in French it's Lundi`)
})

app.get('/tuesday', (req, res) => {
    res.send(`tuesday is the second day of the week and in French it's Mardi`)
})

app.get('/wednesday', (req, res) => {
    res.send(`wednesday is the third day of the week and in French it's Mercredi`)
})

app.get('/thursday', (req, res) => {
    res.send(`thursday is the fourth day of the week and in French it's Jeudi`)
})

app.get('/friday', (req, res) => {
    res.send(`friday is the fifth day of the week and in French it's Vendredi`)
})

app.get('/saturday', (req, res) => {
    res.send(`saturday is the sixth day of the week and in French it's Samedi`)
})

app.get('/sunday', (req, res) => {
    res.send(`sunday is the seventh and last day of the week and in French it's Dimanche`)
})

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})