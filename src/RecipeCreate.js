import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  console.log(formData)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);

    console.log("submitted", formData)

    setFormData(initialFormData);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                required={true}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name="cuisine"
                id="cuisine"
                type="text"
                placeholder="Cuisine"
                value={formData.cuisine}
                required={true}
                onChange={handleChange}
              />
            </td>
            <td>
              <input
                name="photo"
                id="photo"
                type="url"
                value={formData.photo}
                required={true}
                placeholder="URL"
                onChange={handleChange}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                value={formData.ingredients}
                required={true}
                placeholder="Ingredients"
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                id="preparation"
                value={formData.preparation}
                required={true}
                placeholder="Preparation"
                onChange={handleChange}
              ></textarea>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
