# WhatsCookin'


Project 4 Idea: WhatsCookin’

WhatsCookin’ is an app that tells users what they can cook with the ingredients they already have in their kitchen. So often food goes to waste because we either forget about the ingredients that we have, or we don’t know what to make. This app will allow users to enter their kitchen ingredients, add recipes that they love and remind them of when they can put together a delicious meal.


Models and their properties: 

User: 
-	Name: string
-	Username: string, required
-	Password: string, required

Ingredient: 
-	Name: string, required 
-	Amount: number


Recipe: 
-	Name: string, required
-	Ingredients: array, required



MVP User Stories: 

1.	As a User I want to add, edit and delete items to/from my kitchen.
2.	As a User I want to add, edit delete recipes to my recipe book. 
3.	As a User I want to retrieve recipes that include all the ingredients that are in my kitchen
4.	As a User I want to check how much it would cost to purchase ingredients for a recipe. (Amazon Price API)


Stretch Goals: 

1.	As a User, I want to assign a recipe for each day of the upcoming week so that I can meal-prep 
2.	As a User, I want a slick interface that makes it easy to enter all my kitchen items into the app 
3.	As a User, I want to enter which ingredients I definitely want to use, and retrieve recipes that include those specific ingredients 


Technology Used: 
-	React for frontend 
-	CSS
-	Bootstrap
-	JS 
-	Express
-	Mongoose
-	Node

Wireframes: 

<img width="948" alt="Screen Shot 2022-03-16 at 6 18 17 PM" src="https://user-images.githubusercontent.com/91581821/158719034-3e93392b-5c96-4889-90e8-76e822220945.png">


