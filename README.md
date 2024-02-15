# Level2

REact and react dom are 2 main core mandatory dependency

### A Content Delivery Network (CDN) accelerates website loading by storing and delivering content from servers located closer to users, reducing latency and enhancing overall performance. It also provides security features and helps manage traffic efficiently through caching and load balancing

Bundler Helps making multiple file into a single file, by which multiple files not rendered. Only the buldled file will be rendered

**serve

**MODULE 1 need to revised

REACT :**

`React.createElement` is a function in React, a JavaScript library for building user interfaces. It is used to create React elements, which are the building blocks of React applications.

Here's a simple breakdown:

1. **First Argument (type):** The type of the element you want to create. It could be a string representing an HTML tag like `"div"`, or it could be a reference to a React component.
2. **Second Argument (props):** An object that contains properties or attributes you want to set for the element. This can include things like `className` for setting CSS classes or `onClick` for handling click events.
3. **Remaining Arguments:** Any additional arguments represent the children of the element. These could be other React elements, strings, or numbers.

Here's an example:

```jsx
const myElement = React.createElement('div', { className: 'my-class' }, 'Hello, React!');

```

In this example:

- The type of the element is `'div'`.
- The `props` object contains the `className` property set to `'my-class'`.
- The content of the element is the string `'Hello, React!'`.

This creates a React element that represents a `<div>` with the specified class and content.

While `React.createElement` is commonly used, in modern React development, JSX (JavaScript XML) is often used as a more concise and readable syntax to create React elements. JSX is transformed into `React.createElement` calls during the build process. The above example in JSX would look like this:

```jsx
const myElement = <div className="my-class">Hello, React!</div>;

```

Both approaches achieve the same result, but JSX is generally preferred for its readability and familiarity with HTML-like syntax.

Babel ; JSX —> Raw JS

RollUp : Bundler - combine multiple pages into a single

StrictMode :: 
• Your components will [re-render an extra time](https://react.dev/reference/react/StrictMode#fixing-bugs-found-by-double-rendering-in-development) to find bugs caused by impure rendering.
[React assumes that every component you write is a pure function.](https://react.dev/learn/keeping-components-pure)

Render UseState :

1. React doesn't render the whole component, it only rendered the dynamic element that changed 
2. In initial state , if the value of state doesnt changed it doesnt re render. But it state changes for 1 time, and for any operation the value  isnt changes it re render for once, to souble check the value isnt changed. and after that re render it doesnt render anymore

3. For Multiple state Update,, React stores all the update into a  batch, then it updates it together. this is called batch update - It optimize performance

example:

const [count, setCount] = useState(0);

`const incrementCount = () => {
setCount(count + 1);
setCount(count + 1);
setCount(count + 1);
};`

`<button onClick={incrementCount} className="">
Increment 3
</button>`

Though set Count is called 3 times, so value of count should be increased by 3 
but everytime , setCount is called the update isnt done immediately . It stores the value of count in a batch with the immediate value of count. As a result, for every `setCount(count + 1)`  it assumes the value of count is 0 and it increases 1 then for the next `setCount(count + 1)`  it again assumes the value of count is 0 {as the value of count is 0 still and the previous count value+1 isnt rendered yet} and it increases 1 . So for every `setCount(count + 1)`  it assumes the value of count is 0 and it increases 1 Umtimately the value of count is 1 rendered for all count value.
SO this is Batch Update _ it doesnt update everytime for SetCount . it stores the value, and measures the last rendered value . then stores all the result in a batch and after all the operation it update as a batch

To update immediately, we can write

```
const incrementCount = () => {
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
    setCount((prevState) => prevState + 1);
  };
```

Here, prevState holds the value and update immediately

```tsx
const handleAsyncIncrement = () => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  };
```

```tsx
<button onClick={handleAsyncIncrement} className="btn btn-">
          Async Increment
        </button>
```

Here , if we click first on async increment and until the 2 seconds of its update if we click on increment though it will update but when the async increment is applied it will discard the increment update

The **`setTimeout`** function is a JavaScript function that allows you to execute a specified function or a piece of code after a specified delay, measured in milliseconds. setTimeout(function, delay);

**State Lifting** : If state of parent component needs to be accessed by Child Component , we should store the state in Parent component and pass it to the child component. Its called state lifting 

**`dispatch`** typically refers to a function used to trigger an action or an update to the state of a component

Primitive  VS Reference :

`// Primitive data types
let num1 = 5;
let num2 = num1; // num2 gets a copy of the value of num1
num1 = 10; // changing num1 does not affect num2
console.log(num1); // Output: 10
console.log(num2); // Output: 5`

`// Reference data types
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 gets a reference to the same array as arr1
arr1.push(4); // changing arr1 affects arr2
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]`

In summary, the main difference between reference and primitive data types lies in how they are stored in memory and how assignments work. Primitive types are stored directly in memory, while reference types store references to their data, which is stored elsewhere in memory

1. To Provide multiple state, we can use an object as a state

2.without spread operator the last input value will replace the previous    one as object is a primitive type

We  try to use component only as to design component , we will try to not keep any condition within JSX

**Research SEPARATION OF CONCERN AND DRY 

// Make Sure the name value used in input EventTarget, must be similar with the properties declared in object state , otherwise value wont be stored in original state

//Using [] will make the property dynamic, thats why we used [name]

// console.log({ inputName: value });

// if i use like this , then both input value of email and password will be stored as inputName, as inputName is treated as new property and it doesn't update the email and password value

// setUser({ ...user, name: value }); --> this will set all input value in name, both email password will be stored in name value

//    console.log(inputName: value); will lead to syntax error

//    setUser({ ...user, [name]: value }); will use the value of name dynamically

// Make Sure the name value used in input EventTarget, must be similar with the properties declared in object state , otherwise value wont be stored in original state

//Using [] will make the property dynamic, thats why we used [name]

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

Payload **stores the additional information about what happened**.

UseReducerXForm: 

initialState : name and email ex: const initialState = { name: "", email: "" };

reducer : name and email should be sent as payload and to avoid mutation that means replacing the previous value in object as object is a primitive type we should use spread operator to hold the previous value

ex : case "addName": {
return { ...currentState, name: action.payload };
}

Payload: e.target.value 

ex : onChange={(e) => {
dispatch({ type: "addName", payload: e.target.value });
}}

**UseEffect : Used to run side effect(when component runs something after rendering)**

**Journal : https://react.dev/learn/you-might-not-need-an-effect** 

**Dependency Array in UseEffect:**

In React's **`useEffect`** hook, the dependency array is an optional parameter that allows you to specify dependencies for the effect. The effect will only be re-executed if one of the dependencies has changed since the last render.

Here's how it works:

1. **Empty Dependency Array**: If you pass an empty array **`[]`** as the dependency array, the effect will only run once, after the initial render, and it won't re-run for subsequent re-renders.
    
    ```jsx
    jsxCopy code
    useEffect(() => {
      // Effect code here runs only once after the initial render
    }, []);
    
    ```
    
2. **Array with Dependencies**: If you specify dependencies in the array, the effect will be re-executed whenever any of the dependencies change.
    
    ```jsx
    jsxCopy code
    useEffect(() => {
      // Effect code here runs whenever 'dependencyA' or 'dependencyB' changes
    }, [dependencyA, dependencyB]);
    
    ```
    
    If any of the dependencies in the array have changed since the last render (as determined by a shallow comparison), React will re-run the effect. React will compare the current value of each dependency with the value it had during the previous render.
    
3. **No Dependency Array**: If you omit the dependency array altogether, the effect will run after every render. This behavior is similar to using **`componentDidUpdate`** in class components without specifying any conditions.
    
    ```jsx
    jsxCopy code
    useEffect(() => {
      // Effect code here runs after every render
    });
    
    ```
    

It's important to choose the appropriate dependencies for your effect. Including dependencies that aren't actually used inside the effect could lead to unnecessary re-renders or bugs. Conversely, omitting dependencies that are used inside the effect could result in stale closures or unexpected behavior.

In summary, the dependency array in **`useEffect`** allows you to control when the effect runs based on changes to specific values or variables in your component.

Yes, you can think of dependencies in the `useEffect` hook as the conditions or variables that, when changed, may trigger a re-render of your component. Dependencies are essentially the values that your effect depends on to function correctly or to update its behavior.

When you specify dependencies in the dependency array, React knows to re-run the effect whenever any of those dependencies change. This allows you to ensure that your effect always has access to the most up-to-date values of the variables or state it relies on.

For example, if you have a component that fetches data from an API and you want to re-fetch the data whenever a certain variable changes, you would include that variable as a dependency in the `useEffect` hook.

Here's a basic example:

```jsx
import React, { useEffect, useState } from 'react';

function MyComponent({ userId }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from API whenever userId changes
    fetchUserData(userId);
  }, [userId]); // userId is a dependency

  async function fetchUserData(userId) {
    // Perform API call to fetch user data based on userId
    // Update state with fetched data
    const data = await fetch(`https://api.example.com/users/${userId}`);
    const userData = await data.json();
    setUserData(userData);
  }

  return (
    <div>
      {userData ? (
        <div>
          <h1>{userData.name}</h1>
          <p>Email: {userData.email}</p>
          {/* Display other user data */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MyComponent;

```

In this example, the effect depends on the `userId` variable. Whenever `userId` changes, the effect is re-run, triggering a re-fetch of the user data from the API. This ensures that the component always displays the correct user data based on the current `userId` value.

So yes, you can consider dependencies as the conditions or variables responsible for triggering renders or updates in your component.
