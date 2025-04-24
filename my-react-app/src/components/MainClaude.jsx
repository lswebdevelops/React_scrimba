import { useEffect, useRef, useState } from "react";
import IngredientsList from "./IngredientsList";
import ClaudeComponent from "./ClaudeRecipe";
import { getRecipeFromChefClaude } from "../ai";

export default function MainClaude() {
  const [ingredients, setIngredients] = useState([
    
  ]);
  const [recipe, setRecipe] = useState("");

  const recipeSection = useRef(null);

  useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null ) {
      recipeSection.current.scrollIntoView({behavior: "smooth"})
    }
  }, [recipe]);
  
  const [error, setError] = useState(null); // Add error state

  async function getRecipeFromAi() {
    try {
      const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
      setRecipe(recipeMarkdown);
      setError(null); // Clear any previous errors
    } catch (err) {
      console.error("Error fetching recipe:", err.message);
      setError("Failed to fetch recipe. Please try again later."); // Set error message
    }
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="exemplo: oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Adicione ingredientes</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipeFromAi={getRecipeFromAi}
        />
      )}
      {error && <p className="error">{error}</p>} {/* Display error message */}
      {recipe && <ClaudeComponent recipe={recipe} />}
    </main>
  );
}
