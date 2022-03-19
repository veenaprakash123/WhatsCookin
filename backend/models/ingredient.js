const mongoose = require("../db/connection");

const ingredientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    amount:{type: String},
    location:{type: String},
    image: {type: String},
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
})

const Ingredient = mongoose.model("Ingredient", ingredientSchema);

module.exports = Ingredient;