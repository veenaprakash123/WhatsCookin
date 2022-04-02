const mongoose = require('./connection')
const Recipe = require('../models/recipe')

Recipe.deleteMany({})
.then(() => {
    return Recipe.insertMany([
        {
            "meal": 'Eggplant Parmesan',
            "ingredients": [{'ingredient' : 'eggplant'} , {'ingredient' : 'flour'}, {'ingredient': 'egg'}, {'ingredient': 'cheese'}, {'ingredient': 'marinara'}],
            "instructions": 'Slice eggplant and cover with melted butter. sprinkly breadcrumbs and bake.'
        },
        {
            "meal": 'Penne alla vodka',
            "ingredients": [{'ingredient': 'penne'}, {'ingredient': 'garlic'}, {'ingredient': 'onion'}, {'ingredient': 'butter'}, {'ingredient': 'vodka'}, {'ingredient': 'heavy cream'}],
            "instructions": 'Heat pasta in boiling water. Mix together heavycream and pesto. Drain the pasta and mix into the pesto sauce'
        },
        {
            "meal": 'Green Smoothi',
            "ingredients": [{'ingredient': 'milk'}, {'ingredient': 'spinach'}, {'ingredient': 'banana'}, {'ingredient': 'apple'}, {'ingredient': 'avocado'}],
            "instructions": 'Blend all ingredients together in a blender'
        },
        {
            "meal": 'Sandwich',
            "ingredients": [{'ingredient': 'bread'}, {'ingredient': 'mustard'}, {'ingredient': 'pickles'}],
            "instructions": 'Toast the bread and then spread mustard on one slide. Cover in pickles and place the other slice of bread on top.'
        }


    ])
})
.then(data => console.log(data))
.catch(err => console.log(err))
.finally(() => process.exit)
