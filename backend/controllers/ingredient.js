const express = require('express')
const router = express.Router()
const Ingredient = require('../models/ingredient')

router.get('/', (req, res) => {
    Ingredient.find({}, (error, ingredients) => {
        if (error){
            res.status(400).json({error: error.message})
        } 
            console.log(ingredients)
            res.status(200).json(ingredients)
    })
})





module.exports = router