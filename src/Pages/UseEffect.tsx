import { useEffect, useState } from "react";

const UseEffect = () => {
  const [hidden, setHidden] = useState(false);

  const object1 = { name: "monzur", email: "mnz@gmail.com" };
  const object2 = { name: "monzur", email: "mnz@gmail.com" };
  if (object1 === object2) {
    console.log("Both Object Are Same");
  } else {
    console.log("they are not");
  }

  /* Though object 1 and object 2 property value is same. but Object is reference type, so though the value is same but their reference is different. so it would be treated as two different element */

  /*Dependency is a state/condition where if dependency changes the component re render */
  return (
    <div>
      <h1 className="text-2xl text-red-500">UseEffect</h1>

      <input
        onBlur={(e) => setUser(...user, e.target.value)}
        name="name"
        className="border-2 border-red-500 m-5"
        type="text"
      />
      <input
        onBlur={(e) => setUser(...user, e.target.value)}
        name="email"
        className="border-2 border-red-500 m-5"
        type="text"
      />

      {/* <button
        onClick={() => setHidden((prev) => !prev)}
        className="btn btn-primary"
      >
        {!hidden ? "show" : "hide"}
      </button> */}
      {/* {!hidden && <Counter></Counter>} */}
      {/* {hidden && <ToDo />} */}
    </div>
  );
};

/*Counter Component */
const Counter = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Render");
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <h1 className="border-4 p-3 m-5 text-2xl font-bold text-cyan-500">
      {count}
    </h1>
  );
};

/* To Do*/
const ToDo = () => {
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
      .then((res) => res.json())
      .then((data) => alert(data.title));

    return () => {
      controller.abort();
    };
  }, []);
  return <div>ToDo</div>;
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
