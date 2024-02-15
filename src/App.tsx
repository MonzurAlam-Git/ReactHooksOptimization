import { useState } from "react";
import "./App.css";
import UseState from "./Pages/UseState";
import Forms from "./Pages/Forms";
import Usereducer from "./Pages/Usereducer";
import UseReducerXForm from "./Pages/UseReducerXForm";
import UseEffect from "./Pages/UseEffect";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <UseState count={count} setCount={setCount}></UseState>
      <Forms></Forms>
      {/* <Usereducer></Usereducer> */}
      <UseReducerXForm></UseReducerXForm>
      <UseEffect></UseEffect>
    </div>
  );
}

export default App;
