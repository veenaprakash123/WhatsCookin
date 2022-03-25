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

// View Recipe

router.get('/:id', (req,res)=> {
    Recipe.findById(req.params.id, (error, recipeFound) =>{
        if(error) {
            res.status(400).json({error: error.message})
        }
        console.log(recipeFound)
        res.status(200).json(recipeFound)
    })
})

// Add Recipe

router.post('/', (req, res)=> {
    console.log(req.body)
    Recipe.create(req.body, (error, newRecipe) =>{
        if (error){
            res.status(400).json({error: error.message})
        }
        res.status(200).json(newRecipe)
        console.log(newRecipe)
    })
})


// Delete Recipe

router.delete('/details/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id,(error, rec)=>{
        if (error) {
            res.status(400).json({ error: error.message })
            return
          }
          Recipe.find({}, (error, remainingRecipes) => {
            
            res.status(200).json(remainingRecipes)

        })
    })
}) 


module.exports = router