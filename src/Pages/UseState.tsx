import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  console.log("Rendered");

  const incrementCount = () => {
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
    setCount(count + 1);
  };

  const handleAsyncIncrement = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  };

  return (
    <div>
      <>
        <h1 className="text-2xl text-red-400">{count}</h1>
        <button onClick={incrementCount} className="">
          Increment
        </button>
        <button onClick={handleAsyncIncrement} className="btn btn-">
          Async Increment
        </button>
        <button onClick={() => setCount(0)} className="btn btn-">
          Reset
        </button>
      </>
    </div>
  );
};

export default UseState;
