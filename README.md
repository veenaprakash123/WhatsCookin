# WhatsCookin'


Project 4 Idea: WhatsCookin’

WhatsCookin’ is an app that tells users what they can cook with the ingredients they already have in their kitchen. So often food goes to waste because we either forget about the ingredients that we have, or we don’t know what to make. This app will allow users to enter their kitchen ingredients, add recipes that they love and reminds them of the delicious meals they can create.


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
-	Instructions: text



MVP User Stories: 

1.	As a User I want to add, edit and delete items to/from my kitchen so that I can manage my kitchen.
2.	As a User I want to add, edit delete recipes to my recipe book so that I can manage my cook book.
3.	As a User I want to retrieve recipes that include all the ingredients that are in my kitchen so that I can decide which meal to make.
4.	As a User I want to add recipes from online (Spoonacular API) to my personal recipe book so that I don't have to manually re-enter the recipe information.


Stretch Goals: 

1.	As a User, I want to assign a recipe for each day of the upcoming week so that I can meal-prep.
2.	As a User, I want a slick interface that makes it easy to enter all my kitchen items into the app so that this process does not feel tedious.
3.	As a User, I want to enter which ingredients I definitely want to use, and retrieve recipes that include those specific ingredients so that I know that additional purchases are not necessary.


Technology Used: 
-	React for frontend 
-	CSS
-	Bootstrap
-	JS 
-	Express
-	Mongoose
-	Node

Screenshots of Application: 

<img width="1123" alt="welcome" src="https://user-images.githubusercontent.com/91581821/161386120-51bcf12c-e56c-44a0-948b-330ef5c40fb0.png">

<img width="975" alt="createAccount" src="https://user-images.githubusercontent.com/91581821/161386149-e9be8192-b1b8-421f-9835-fc7363eb3a68.png">

<img width="1018" alt="login_WC" src="https://user-images.githubusercontent.com/91581821/161386162-e0e45324-5a07-4350-92ca-45d30fab7f31.png">

<img width="994" alt="landing" src="https://user-images.githubusercontent.com/91581821/161386126-e9626d77-c70a-4d26-a049-ae4900ce5512.png">

<img width="1150" alt="kitchen" src="https://user-images.githubusercontent.com/91581821/161386135-bcd9a1b6-21e2-4ccf-9b64-cc898e04292b.png">

<img width="1223" alt="newIngredient" src="https://user-images.githubusercontent.com/91581821/161386174-cbe694cb-38a9-47b6-bd74-4c7cb8747f9f.png">

<img width="1172" alt="viewIngredient" src="https://user-images.githubusercontent.com/91581821/161386222-a8afd1c3-2fdd-4024-9f31-ee2605332a2d.png">

<img width="1182" alt="landingRecipes" src="https://user-images.githubusercontent.com/91581821/161386183-2a051a52-0ca7-4a2c-b8ad-6b4f051bc3bf.png">

<img width="1161" alt="newRecipe" src="https://user-images.githubusercontent.com/91581821/161386231-b5bc08a1-200b-4791-bb9d-49d2f18b36af.png">

<img width="1115" alt="RecipeDetails" src="https://user-images.githubusercontent.com/91581821/161386239-20730cac-fcf2-4293-92d1-a984913bf65c.png">

<img width="1127" alt="findRecipe" src="https://user-images.githubusercontent.com/91581821/161386251-82ac1545-704b-4f64-b719-de0d3c171bda.png">

<img width="1236" alt="readtogo" src="https://user-images.githubusercontent.com/91581821/161386293-1e5ffdcf-9e32-428e-8586-4ce86e2993af.png">


What I'm most proud of: 

Being able to use the Spoonacular API to pull recipes from online, edit them and add them to my recipe book. I think this is useful if users have their own version of different recipes that they would like to save. 

Areas of struggle and continued work: 

I was not able to implement user authentication so this is something that I want to continue working on, because the application is only useful if a user can save the recipes in their recipe book. I also want to continue working on the UI/UX.
