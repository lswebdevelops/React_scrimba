import React from "react";
export default function App() {
 
  return (
    <main>    
      <button onClick={handleClick} >Add icon</button>
      <section aria-live="polite">{thingsElemetns}</section>
    </main>
  );
}
