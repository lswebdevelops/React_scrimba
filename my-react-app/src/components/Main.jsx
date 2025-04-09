import React from "react";

const Main = () => {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
 
  
  return (
    <main>
      <form  className="add-ingredient-form">
        <input
          id="input"
          name="ingredient"
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>test</ul>
    </main>
  );
};

export default Main;
