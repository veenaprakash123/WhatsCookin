const mongoose = require('./connection')
const Recipe = require('../models/recipe')

Recipe.deleteMany({})
.then(() => {
    return Recipe.insertMany([
        {
            "meal": 'Eggplant Parmesan',
            "ingredients": [{'ingredient' : 'eggplant'} , {'ingredient' : 'flour'}, {'ingredient': 'egg'}, {'ingredient': 'cheese'}, {'ingredient': 'marinara'}],
            "instructions": 'instructions for eggplant parm'
        },
        {
            "meal": 'Penne alla vodka',
            "ingredients": [{'ingredient': 'penne'}, {'ingredient': 'garlic'}, {'ingredient': 'onion'}, {'ingredient': 'butter'}, {'ingredient': 'vodka'}, {'ingredient': 'heavy cream'}],
            "instructions": 'instructions for penne alla vodka'
        },
        {
            "meal": 'Green Smoothi',
            "ingredients": [{'ingredient': 'milk'}, {'ingredient': 'spinach'}, {'ingredient': 'banana'}, {'ingredient': 'apple'}, {'ingredient': 'avocado'}],
            "instructions": 'Blend all ingredients together in a blender'
        },

    ])
})
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => process.exit)
