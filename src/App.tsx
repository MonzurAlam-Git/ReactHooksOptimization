import { useState } from "react";
import "./App.css";
import UseState from "./Pages/UseState";
import Forms from "./Pages/Forms";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <UseState count={count} setCount={setCount}></UseState>
      <Forms></Forms>
    </div>
  );
}

export default App;
