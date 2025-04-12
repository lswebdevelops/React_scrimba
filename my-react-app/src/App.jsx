import React from "react";
import Count from "./components/Count";

function App() {
  const [count, setCount] = React.useState(0);

  const add  = () => {
    setCount(prevState => prevState + 1)
  }
  const minus  = () => {
    setCount(prevState => prevState - 1)
  }

  console.log("app rendered");
  return (
    <div className="container">
      <div className="counter">
        <button onClick={minus}  className="minus"></button>
          <Count number={count} />
        <button onClick={add} className="plus"></button>
      </div>
    </div>
  );
}

export default App;
