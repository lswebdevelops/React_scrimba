import React from "react";

export default function Jokes(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */
  const [isShown, setIsShown] = React.useState(false);

  const handleToggle = () => {
    setIsShown((prevState) => !prevState);
  };

  return (
    <div>
      <ul>
        {props.setup ? <li> {props.setup}</li> : null}
        {isShown ? <li>{props.punchline}</li> : null}
      </ul>
      <button onClick={handleToggle}>
        {!isShown ? "Show" : "Hide"} Punchline
      </button>
    </div>
  );
}
