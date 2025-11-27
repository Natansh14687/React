const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "This is heading h1")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
