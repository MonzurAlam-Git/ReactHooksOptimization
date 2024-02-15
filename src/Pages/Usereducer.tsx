import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (currentState, action) => {
  console.log("State Changed");
  console.log("currentState =>", currentState);
  console.log("action =>", action);
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    case "increment by 3":
      return { count: currentState.count + action.payload };
    default:
      return currentState;
  }
};

const Usereducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("State -> ", state);
  return (
    <div>
      <h1 className="text-2xl font-bold m-5">State Value : {state.count}</h1>
      <button
        onClick={() => dispatch({ type: "increment" })}
        className="btn btn-success ml-5"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn btn-accent ml-5"
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: "increment by 3", payload: 3 })}
        className="btn btn-warning ml-5"
      >
        Increment 3
      </button>
    </div>
  );
};

export default Usereducer;

/* UseReducer Syntax : 
const [state,dispatch] = useReducer(reducerFunction,initialState)
*/
/* reducerFunction has 2 arguments -> CurrentState and Action -- based on action type result of CurrentState is determined
ex:  const reducer = (currentState, action) => {
  set of actions written with switch statement
}
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return { count: currentState.count + 1 };
    case "decrement":
      return { count: currentState.count - 1 };
    default:
      return currentState;
  }
};
*/

/* Dispatch answers the type condition in  reducer function which return the specific result
ex:  <button
        onClick={() => dispatch({ type: "decrement" })}
        className="btn btn-accent ml-5"
      > */
/* Payload is like extra info sent in dispatch
Ex: 
 case "increment by 3":
      return { count: currentState.count + action.payload };

      <button
        onClick={() => dispatch({ type: "increment by 3", payload: 3 })}
        className="btn btn-warning ml-5"
      >
        Increment 3
      </button>
*/
