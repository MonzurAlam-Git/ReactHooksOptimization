[# Level2

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
](https://github.com/MonzurAlam-Git/ReactHooksOptimization.git)https://github.com/MonzurAlam-Git/ReactHooksOptimization.git
