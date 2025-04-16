import React from "react"
import IngredientsList from './IngredientsList'
import ClaudeComponent from './ClaudeRecipe'
import { getRecipeFromMistral } from "../ai"

export default function MainClaude() {
   

    const [ingredients, setIngredients] = React.useState(
        []
    )
    const [recipe, setRecipe] = React.useState(false)
    
    async function   getRecipeFromAi() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown);
    }

  
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

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
            
            {ingredients.length > 0 && 
            <IngredientsList
                ingredients={ingredients}
                getRecipeFromAi={getRecipeFromAi}
                
            
            />}
            
            {recipe && 
            <ClaudeComponent recipe={recipe} /> }
        </main>
    )
}