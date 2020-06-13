// Import React and ReactDOM libs
import React from "react";
import ReactDOM from "react-dom";

// Create React Component
const App = () => {
  var buttonText = "Click Me";

  return (
    <div>
      <label className="label" for="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText}
      </button>
    </div>
  );
};
// Take the Component and show it on Screen.

ReactDOM.render(<App />, document.querySelector("#root"));
