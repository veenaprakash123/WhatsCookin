const mongoose = require("../db/connection");

const recipeSchema = new mongoose.Schema({
    meal:{type: String},
    ingredients:{type: Array},
    instructions:{type: String}, 
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User'
    // }
})

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;