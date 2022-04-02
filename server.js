
require('dotenv').config()
const express = require('express')
const app = express()
// PORT = 4000
app.set('port', process.env.PORT || 4000)
const SESSION_SECRET= process.env.SESSION_SECRET
const cors = require('cors')
const bodyParser = require('body-parser')
const session = require('express-session')
const ingredientController = require('./controllers/ingredient')
const recipeController = require('./controllers/recipe')
const sessionController = require('./controllers/session')

app.use(cors())
app.use(bodyParser.json())

app.use(express.urlencoded({extended:false}))

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use('/kitchen', ingredientController)
app.use('/recipe', recipeController)
app.use('/session', sessionController)


app.listen(app.get('port'), () => {
    console.log(`WhatsCookin is running on port, ${app.get('port')}`)
})

