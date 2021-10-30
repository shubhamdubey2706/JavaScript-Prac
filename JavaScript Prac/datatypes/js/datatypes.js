// two types of datatypes in js
//1. primitive : string, number, boolean, null, undefined, smybol
// it will strore in heap

//2. Array, object literals, function, dates
//it will store in stack

//numbers
let x = 10;
console.log(typeof x);

//string
let y = "shubham";
console.log("Tell us type of y " + typeof y);

//boolean
let z = true;
console.log(typeof z);

let c = {
  name: "shubham",
  age: 34,
  address: "yadav colony jabalpur",
};
console.log(typeof c);

//if u willl declear Array and try to get the type of varibale u will get Array
let n = [21, "shubham", "ram", 99];
console.log(typeof n);
//object
const f = null;
console.log(typeof f);

//undefined
let j;
console.log(typeof j);
