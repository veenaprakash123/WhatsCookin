const mongoose = require('./connection')
const Ingredient = require('../models/ingredient')

Ingredient.deleteMany({})
.then(() => {
    return Ingredient.insertMany([
        {
            "name": 'pear',
            "image": 'pic of apple',
            "location": 'fruit basket',
            "amount": '3'
        },
        {
            "name": 'pasta',
            "image": 'pic of pasta',
            "location": 'pantry',
            "amount": '2 boxes'

        },
        {
            "name": 'tomato',
            "image": 'pic of tomato',
            "location": 'fridge',
            "amount": '7'

        },

    ])
})
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => process.exit)

