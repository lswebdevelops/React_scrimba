import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <main className="container">
      <h1>How many times will Bob say "state" in this section?</h1>
      <div className="counter">
        <button
          onClick={decrease}
          className="minus"
          aria-label="Decrease count"
        ></button>
        <h2 className="count">{count}</h2>
        <button
          onClick={increase}
          className="plus"
          aria-label="Increase count"
        ></button>
      </div>
    </main>
  );
}
