import React from "react";
import padsData from "./data/pads";
import Pad from "./components/Pad";

export default function App(props) {
  const [pads, setPads] = React.useState(padsData);

  const styles = {
    backgroundColor: props.darkmode ? "#222222" : "#cccccc",
  };

  const buttonElements = pads.map((pad) => (
    <Pad 
    darkmode={props.darkmode}
    key={pad.id} on={pad.on} color={pad.color} />
  ));

  return (
    <main style={styles}>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}
