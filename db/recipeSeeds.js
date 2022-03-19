const mongoose = require('./connection')
const Recipe = require('../models/recipe')

Recipe.deleteMany({})
.then(() => {
    return Recipe.insertMany([
        {
            "meal": 'Eggplant Parmesan',
            "ingredients": ['eggplant', 'flour', 'egg', 'cheese', 'marinara'],
            "instructions": 'instructions for eggplant parm'
        },
        {
            "meal": 'Penne alla vodka',
            "ingredients": ['penne', 'garlic', 'onion', 'butter', 'vodka', 'heavy cream'],
            "instructions": 'instructions for penne alla vodka'
        },
        {
            "meal": 'Green Smoothi',
            "ingredients": ['milk', 'spinach', 'banana', 'apple', 'avocado'],
            "instructions": 'Blend all ingredients together in a blender'
        },

    ])
})
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => process.exit)
