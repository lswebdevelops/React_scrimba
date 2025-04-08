import React from "react";
import jokesData from "../data/jokesData.js";

const Jokes = (props) => {
  return (
    <div className="contact-card">
         <p >Setup: {props.setup}</p>
        <p >Punchline: {props.punchline}</p>
        <hr />
    </div>
)
};

export default Jokes;

// import Header from "./components/Header";
// import Jokes from "./components/Jokes";
// import jokesData from "./data/jokesData.js";

// const App = () => {
//   const jokeElements = jokesData.map((joke, index) => {
//     return <Jokes key={index} setup={joke.setup} punchline={joke.punchline} />;
//   });

//   return (
//     <div>
//       <Header />
//       {jokeElements}
//     </div>
//   );
// };

// export default App;
