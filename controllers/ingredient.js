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

// View Details

router.get('/details/:id', (req,res)=> {
    Ingredient.findById(req.params.id, (error, ingredient) => {
        if (error){
            res.status(400).json({error:error.message})
        }
        console.log(ingredient)
        res.status(200).json(ingredient)
    })
})

// Add Ingredient

router.post('/', (req, res) => {
    Ingredient.create(req.body, (error, newIng) => {
        console.log(req.body)
        if(error){
            res.status(400).json({error: error.message})
        }
        res.status(200).json(newIng)
    })
})


// Edit Ingredient 

router.put('/edit/:id', (req,res) => {
    Ingredient.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, updatedIngredient) => {
        if(error){
            res.status(400).json({error: error.message})
            console.log(error)
            return
        }
        console.log(updatedIngredient)
        res.status(200).json(updatedIngredient)
    })
})


// Delete Ingredient

router.delete('/details/:id', (req, res) => {
    Ingredient.findByIdAndDelete(req.params.id,(error, ing)=>{
        if (error) {
            res.status(400).json({ error: error.message })
            return
          }
          Ingredient.find({}, (error, remainingEntries) => {
            
            res.status(200).json(remainingEntries)

        })
    })
}) 




module.exports = router