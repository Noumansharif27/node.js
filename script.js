// let n = 5;

// for (let i = 0; i < n; i++) {
//   console.log(`Hello, ${i}`);
// }
let arguments = process.argv;

for (let i = 2; i < arguments.length; i++) {
  console.log(process.argv[i]);
}
