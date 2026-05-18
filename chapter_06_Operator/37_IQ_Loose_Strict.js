console.log(0 == ""); // true
console.log(0 == "0"); // true
console.log("" == "0"); // false  // transitivity broken!

console.log(0 == false); // true
console.log(null == 0 ); // false
console.log(null == undefined); // true
console.log(null === undefined); // false