import React from "react";

function NewRecipe({ recipe, deleteRecipe }) {
  return (
    <tr>
      <td>
        <p>{recipe.name}</p>
      </td>
      <td>
        <p>{recipe.cuisine}</p>
      </td>
      <td>
        <img
          style={{ objectFit: "scale-down", width: "100%", height: "100%" }}
          src={recipe.photo}
          alt={recipe.name}
        ></img>
      </td>
      <td className="content_td">
        <p>{recipe.ingredients}</p>
      </td>
      <td className="content_td">
        <p>{recipe.preparation}</p>
      </td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(recipe)}>
          Delete
        </button>
      </td>
    </tr>
  );
}

export default NewRecipe;
