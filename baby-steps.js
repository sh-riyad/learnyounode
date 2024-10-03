// let sum = 0;
// process.argv.slice(2).map((value) => {
//     sum += +value;

// });
// console.log(sum);

// console.log(process.argv.slice(2).map(x => +x).reduce((x, y) =>  { return x + y}))

console.log(process.argv.slice(2).map(x => +x).reduce((x, y) => x + y, 0));