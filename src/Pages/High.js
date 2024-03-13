const incrementHigher = (func) => {
  return (num) => {
    return func(num) * 2;
  };
};

/*the parameter num in the returned function serves as the input to the function that's being wrapped by incrementHigher 	*/

// const incrementHigher = (func) => {
//   return (num) => {
//     return func(num) * 2;
//   };
// };

const increment = (num) => {
  return num + 1;
};

const op_higher = incrementHigher(increment);
console.log("op_higher =>", op_higher(5));
// console.log(incrementHigher(increment(5)));

console.log("increment =>", increment(2));
// console.log("increment higher", op_higher);
