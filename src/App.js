import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  function addRecipe(newRecipeToAdd) {
    setRecipes([...recipes, newRecipeToAdd])
  }

  function deleteRecipe(recipeToDelete) {
    const recipesAfterDeletion = recipes.filter((recipe) => recipe !== recipeToDelete)
    setRecipes(recipesAfterDeletion)
  }

  
  return (
    <div className="App">
      <header><h1 style={{fontFamily: "Playfair Display SC", textAlign: "center", fontSize: "64px"}}>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate addRecipe={addRecipe} recipes={recipes}/>
    </div>
  );
}

export default App;
