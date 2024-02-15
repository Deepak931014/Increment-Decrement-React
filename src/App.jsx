import React from "react";
import "./App.css";
import IncrementDecrementBtn from "./components/IncrementDecrementBtn";

function App() {
  return (
    <div className="container">
      <IncrementDecrementBtn minValue={0} maxValue={105} />
    </div>
  );
}

export default App;
