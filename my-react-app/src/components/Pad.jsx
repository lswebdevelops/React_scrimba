import React from "react";

function Pad(props) {
  const [colorState, setColorState] = React.useState(props.on);
  const [colorBorderState, setColorBorderState] = React.useState(props.on);

  const toggleColor = () => {
    setColorState((prevState) => !prevState);
    setColorBorderState((prevState) => !prevState);
  };

  return (
    <>
      <button
        onClick={toggleColor}        
        style={{ backgroundColor: props.color, border: colorBorderState? "solid 3px white" : "solid 3px black"   }}
        className={colorState ? "on" : undefined}

      ></button>
    </>
  );
}

export default Pad;
