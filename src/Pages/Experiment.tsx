import { useContext } from "react";
import { DarkContext } from "../Components/Context/ExperimentProvider";

const Experiment = () => {
  const { dark, setDark } = useContext(DarkContext);
  console.log("Dark mode in Experiment Component =>", dark);

  return (
    <div>
      <h1 className="text-2xl text-red-500">Experiment</h1>
      <button onClick={() => setDark(!dark)} className="btn btn-primary">
        Toggle
      </button>
    </div>
  );
};

export default Experiment;
