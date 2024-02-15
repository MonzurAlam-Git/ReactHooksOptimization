import { useReducer } from "react";

const UseReducerXForm = () => {
  const initialState = { name: "", email: "" };
  type Action = {
    type: string;
    payload: string;
  };

  const reducerFunction = (
    currentState: typeof initialState,
    action: Action
  ) => {
    console.log(action);
    switch (action.type) {
      case "addName": {
        return { ...currentState, name: action.payload };
      }
      case "addEmail": {
        return { ...currentState, email: action.payload };
      }
    }
  };
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <h1 className="text-center text-2xl text-red-600 font-bold m-5">
        UseReducerXForm
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            dispatch({ type: "addName", payload: e.target.value });
          }}
          className="border border-cyan-400 mr-5 p-2"
          type="name"
          name="name"
        />
        <input
          onChange={(e) => {
            dispatch({ type: "addEmail", payload: e.target.value });
          }}
          className="border border-cyan-400 mr-5 p-2"
          type="name"
          name="email"
        />
        {/* without spread operator the last input value will replace the previous
        one as object is a primitive type */}
        <input
          className="border border-cyan-400 mr-5 p-2"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default UseReducerXForm;
