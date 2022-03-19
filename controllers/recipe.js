const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipe')

router.get('/', (req, res)=>{
    Recipe.find({}, (error, recipes)=>{
        if (error) {
            res.status(400).json({error: error.message})
        }
            console.log(recipes)
            res.status(200).json(recipes)
    })
})






module.exports = router