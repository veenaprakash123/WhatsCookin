const mongoose = require('./connection')
const Ingredient = require('../models/ingredient')

Ingredient.deleteMany({})
.then(() => {
    return Ingredient.insertMany([

        {
            "name": 'pear',
            "amount": '3',
            "location": 'fridge',
            "image": 'https://images.albertsons-media.com/is/image/ABS/184120177?$ecom-pdp-desktop$&defaultImage=Not_Available',
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
            "image": 'https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=',
        },
        {
            "name": 'salt',
            "amount": '1 jar',
            "location": 'pantry',
            "image": 'pic of salt',
        },
        {
            "name": 'bread',
            "amount": '1 box',
            "location": 'pantry',
            "image": 'pic of bread',
        },
        {
            "name": 'cous cous',
            "amount": '1 jar',
            "location": 'pantry',
            "image": 'pic of cous cous',
        },
        {
            "name": 'flour',
            "amount": '1 bag',
            "location": 'pantry',
            "image": 'pic of flour',
        }, 
        {
            "name": 'mustard',
            "amount": '1 bottle',
            "location": 'fridge',
            "image": 'pic of mustard',
        },
        {
            "name": 'pickles',
            "amount": '1 jar',
            "location": 'fridge',
            "image": 'pic of pickles',
        },
        {
            "name": 'bell peppers',
            "amount": '7',
            "location": 'fridge',
            "image": 'pic of bell peppers',
        }, 
        {
            "name": 'golden kiwi',
            "amount": '6',
            "location": 'fridge',
            "image": 'pic of kiwi',
        }

    ])
})
.then(data => console.log(data))
.then(err => console.log(err))
.finally(()=> process.exit)

