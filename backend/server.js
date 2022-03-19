const express = require('express')
const app = express()
PORT = 4000
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const ingredientController = require('./controllers/ingredient')
const recipeController = require('./controllers/recipe')
const sessionController = require('./controllers/session')

app.use(cors())
app.use(bodyParser.json())

app.use('/kitchen', ingredientController)
app.use('/recipe', recipeController)
app.use('/session', sessionController)


app.listen(PORT, () => {
    console.log('WhatsCookin is running on port', PORT)
})

