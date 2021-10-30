/*//Variable is container which is hold some vaules
// There are 3 ways to declear JS variables
// 1.let 2.var 3.const
// let = can be redeclred, It provides block space can access outside the block
//const and let = can not be redeclred and can not not access outside the block

//it can be redecleared and provide block space and can access out side the block.
var x = 10;
var x;
var z = ["shubham", 76, 0.0]; // array
var l = { name: "chotu", age: 15 }; // object
{
  var x = "shubham"; // string
}
console.log(x, z, l);

var c = "shubham";
var d; //variable declear but not assign any value it will undefined
console.log(c, d);
*/

/*
let :
1. can not redeclear
2. can not access outside the block it provided block scope
3. can change the variable value even after assign
4. only access and change in block
let y = 20;
{
  let x = 10;
  x = 11;
  console.log(x + 1);
}
console.log(y);
*/

/*
//const:
//1. can not redeclear
//2. can not access outside the block provide block space
//3. can not rechange value of block inside the block
const n = ["shubham", "10", "yadav colony"];
{
  const p = "chotu";
  const p = "ram";// can not redefined
  const x = { name: "shubh", age: 15, address: "yadav colony" };
  //p = "chotu ";// it is not allowed through an error
  console.log(x);
}
console.log(n);
*/
