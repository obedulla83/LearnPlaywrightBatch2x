// comparsion strict and loose

console.log(42 == "42"); // Output: true // loose comparsion
console.log(42 === "42"); // Output: false // data type and coverted value

console.log(42 == "45"); // Output: false // values is different

console.log(0 == ""); //conversted to 0 - check by the loose
console.log(0 === ""); 

console.log(5 === 5); // Output: true // data type and coverted value
console.log(5 === "5"); // Output: false // data type and coverted value

console.log(5 == 5);
console.log(5 == "5");

console.log (true == 1); // Output: true // loose comparsion
console.log (false == 0); // Output: true // loose comparsion
console.log (true == "1"); // Output: true // loose comparsion
console.log (true == 2 ); // Output: true // loose comparsion


console.log(5 != 5); // Output: false // data type and coverted value
console.log(5 !== "5"); // Output: true // data type and coverted value
// console.log(5 !=== "5"); // This doesnt not exisit 

// === strict check we will check for both the datatype and value
// == loose check we will check for only value and not the datatype