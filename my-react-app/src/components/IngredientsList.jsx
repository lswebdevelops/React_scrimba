import React from "react";

function IngredientsList(props) {
    const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

  return (
    <section>
      <h2>Ingredientes disponíveis:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {props.ingredients.length > 3 && (
        <div className="get-recipe-container">
          <div
               ref={props.ref}
               >
            <h3             
            >Pronto para uma receita?</h3>
            <p>Gere uma receita com sua lista de ingredientes.</p>
          </div>
          <button           
          onClick={props.getRecipeFromAi}>Gerar receita</button>
        </div>
      )}
    </section>
  );
}

export default IngredientsList;
