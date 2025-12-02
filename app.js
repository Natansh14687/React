import React from "react";
import ReactDOM from "react-dom/client";



// const parent1 = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", { id: "heading" }, "This is heading h1")
//   )
// );

// console.log(parent1);

const x = 100+200;
const HeaderComponent = () => (
  <div>
    {x}
    <h1>This is the HeaderComponent</h1>
  </div>
)


// react element
const parent = <div id="parent">
  <HeaderComponent />
  <h1>This is heading h1 from jsx</h1>
  </div>

console.log(parent);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
