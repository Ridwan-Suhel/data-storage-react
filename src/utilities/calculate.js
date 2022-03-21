const add = (first, second) => {
  return first + second;
};

const multiply = (first, second) => {
  return first * second;
};

// array reduce
// const numbers = [24, 45, 56, 34];
// const sumReducer = (previous, current) => previous + current;
// let total = numbers.reduce(sumReducer, 0);

// // obj reduce
// const items = [
//   { id: 1, name: "alta", price: 100 },
//   { id: 1, name: "alta", price: 100 },
//   { id: 1, name: "alta", price: 100 },
//   { id: 1, name: "alta", price: 100 },
//   { id: 1, name: "alta", price: 100 },
// ];

// const itemSumReducer = (prev, curr) => prev + curr.price;
// const itemTotal = items.reduce(itemSumReducer, 0);

const getTotalPrice = (products) => {
  const reducer = (prev, curr) => prev + curr.price;
  const total = products.reduce(reducer, 0);
  return total;
};

export { add, multiply, getTotalPrice as getTotal };
