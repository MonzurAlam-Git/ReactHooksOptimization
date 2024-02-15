import { useEffect, useState } from "react";

const UseEffect = () => {
  const [state, setState] = useState(false);
  useEffect(() => {
    console.log("Rendered");
    return () => {
      console.log("CleanUp Triggered");
    };
  }, [state]);
  /*Dependency is a condition where if dependency changes the component re render */
  return (
    <div>
      <h1 className="text-2xl text-red-500">UseEffect</h1>
      <button
        onClick={() => setState((prev) => !prev)}
        className="btn btn-primary"
      >
        Click
      </button>
    </div>
  );
};

export default UseEffect;

/* CleanUp is when we return something from useEffect . Effects of cleanUp is : it works before all other statement in useEffect*/

/* For Example :   const [state, setState] =  useState(false);
  useEffect(() => {
    console.log("Rendered");
    return () => {
      console.log("CleanUp Triggered");
    };
  }, [state]);
  
  For the above code, before rendered consoling to log, CleanUp Triggered will consoling to log first 
  */
