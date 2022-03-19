const mongoose = require('./connection')
const Ingredient = require('../models/ingredient')

Ingredient.deleteMany({})
.then(() => {
    return Ingredient.insertMany([
        {
            "name": 'pear',
            "amount": '3',
            "location": 'fruit basket',
            "image": 'pic of apple',
        },
        {
            "name": 'pasta',
            "amount": '2 boxes',
            "location": 'pantry',
            "image": 'pic of pasta',
        },
        {
            "name": 'tomato',
            "amount": '7',
            "location": 'fridge',
            "image": 'pic of tomato',
        },

    ])
})
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => process.exit)

