import { useState } from "react";
import "./App.css";
import UseState from "./Pages/UseState";
import Forms from "./Pages/Forms";
import Usereducer from "./Pages/Usereducer";
import UseReducerXForm from "./Pages/UseReducerXForm";
import UseEffect from "./Pages/UseEffect";
import UseEffect2 from "./Pages/UseEffect2";
import UseRef from "./Pages/UseRef";
import ThemeProvider from "./Components/Context/ThemeProvider";
import Experiment from "./Pages/Experiment";
import Exp_2 from "./Pages/Exp_2";
// import High from "./Pages/High";
import UseAvatar from "./Pages/HigherOrderComponents/UseAvatar";
import GameResults from "./Pages/HigherOrderComponents/GameResults";
import UsersContainer from "./Pages/UsersContainer";
import Select from "./Pages/Select";
import SelectWork from "./SelectWork";

function App() {
  return (
    <div>
      {/* <UseState count={count} setCount={setCount}></UseState> */}
      {/* <Forms></Forms> */}
      {/* <Usereducer></Usereducer> */}
      {/* <UseReducerXForm></UseReducerXForm> */}
      {/* <UseEffect></UseEffect> */}
      {/* <UseEffect2></UseEffect2> */}
      {/* <UseRef></UseRef> */}
      <Experiment></Experiment>
      {/* <ThemeProvider></ThemeProvider> */}
      <Exp_2></Exp_2>
      {/* <GameResults></GameResults> */}
      {/* <UsersContainer></UsersContainer> */}
      <SelectWork></SelectWork>
    </div>
  );
}

export default App;
