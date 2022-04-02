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
            "image": 'https://media.istockphoto.com/photos/crystals-of-shallow-salt-in-a-scoop-spoon-on-a-dark-gray-table-for-picture-id1051727580?k=20&m=1051727580&s=612x612&w=0&h=v3gWwwVtHrz6fNouAUAydniYE9SedKbORry0cE-Kzq0=',
        },
        {
            "name": 'bread',
            "amount": '1 box',
            "location": 'pantry',
            "image": 'https://healthynibblesandbits.com/wp-content/uploads/2019/12/Milk-Bread-FF2.jpg',
        },
        {
            "name": 'cous cous',
            "amount": '1 jar',
            "location": 'pantry',
            "image": 'https://images.albertsons-media.com/is/image/ABS/960438259?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available',
        },
        {
            "name": 'flour',
            "amount": '1 bag',
            "location": 'pantry',
            "image": 'https://www.meijer.com/content/dam/meijer/product/0001/60/0010/61/0001600010610_2_A1C1_1200.png',
        }, 
        {
            "name": 'mustard',
            "amount": '1 bottle',
            "location": 'fridge',
            "image": 'https://m.media-amazon.com/images/I/71iNDByzp8L._SL1500_.jpg',
        },
        {
            "name": 'pickles',
            "amount": '1 jar',
            "location": 'fridge',
            "image": 'https://media.istockphoto.com/photos/pickled-gherkins-picture-id171292196?k=20&m=171292196&s=612x612&w=0&h=TmvFrmpggqn2mSY8jyGxlyLiEMxQgGp8kLFVaTPwb0M=',
        },
        {
            "name": 'bell peppers',
            "amount": '7',
            "location": 'fridge',
            "image": 'https://images.albertsons-media.com/is/image/ABS/184710682?$ecom-pdp-desktop$&defaultImage=Not_Available&defaultImage=Not_Available',
        }, 
        {
            "name": 'golden kiwi',
            "amount": '6',
            "location": 'fridge',
            "image": 'https://www.theblackpeppercorn.com/wp-content/uploads/2013/03/golden-kiwi-4x3a.jpg',
        }

    ])
})
.then(data => console.log(data))
.then(err => console.log(err))
.finally(()=> process.exit)

