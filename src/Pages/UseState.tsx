type Counter = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const UseState = ({ count, setCount }: Counter) => {
  //   const [count, setCount] = useState(0);
  console.log("Rendered");

  const incrementCount = () => {
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
    // setCount((prevState) => prevState + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const handleAsyncIncrement = () => {
    setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 2000);
  };

  return (
    <div>
      <>
        <h1 className="text-2xl text-red-400">{count}</h1>
        <button onClick={incrementCount} className="">
          Increment
        </button>
        <button onClick={handleAsyncIncrement} className="">
          Async Increment
        </button>
        <button
          onClick={() => setCount(0)}
          className="bg-cyan-400 hover:bg-purple-300"
        >
          Reset
        </button>
      </>
    </div>
  );
};

export default UseState;
