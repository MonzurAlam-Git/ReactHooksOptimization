import { useContext, useEffect, useRef } from "react";
import InputTag from "../Components/InputTag";
import { ThemeContext } from "../Components/Context/ThemeProvider";
import { MenuList } from "../Components/Context/Menu";

const UseRef = () => {
  const { dark, setDark } = useContext(ThemeContext);
  console.log("Dark mode in useRef Component =>", dark);

  //   const [state, setState] = useState(0);
  const reference = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    reference.current?.focus();
  }, []);

  //   const handleIncrement = () => {
  //     reference.current = reference.current + 1;
  //     setState(state + 1);
  //     console.log("ref", reference.current);
  //     console.log("state", state);
  //   };

  return (
    <div>
      <h1 className="text-2xl text-center text-red-600">UseRef</h1>
      {/* <h1 className="">{reference.current}</h1> */}
      {/* <button onClick={handleIncrement} className="btn btn-primary">
        {reference.current}
      </button> */}
      {/* <input ref={reference} className="border-2 border-red-500" type="text" /> */}
      <button onClick={() => setDark(!dark)} className="btn btn-primary m-10">
        Toggle In UseRef
      </button>
      <InputTag ref={reference} className="border border-red-500"></InputTag>
    </div>
  );
};

export default UseRef;
