import React from "react";
import Recipe from "./Recipe";

export default function Claude() {
  //   const [ingredients, setIngredients] = React.useState([]);
  const [ingredients, setIngredients] = React.useState([
    "beef",
    "onion",
    "garlic ",
    "tomato paste",
    "tomatoes",
    "beef broth",
    "oregano",
    "basil",
    "Parmesan",
  ]);
  const [recipeCode, setRecipeCode] = React.useState(false);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  const toggleRecipeShown = () => {
    setRecipeCode((prevState) => (prevState = !prevState));
  };

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredientsListItems.length === 0 ? null : ingredientsListItems.length <
        3 ? (
        <section>
          <p>
            <strong>Add at least three or more ingredients:</strong>
          </p>
          <h2>Ingredients on hand:</h2>
          {ingredientsListItems}
        </section>
      ) : (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={toggleRecipeShown}>Get a recipe</button>
          </div>
        </section>
      )}

      {recipeCode && <Recipe />}
    </main>
  );
}
