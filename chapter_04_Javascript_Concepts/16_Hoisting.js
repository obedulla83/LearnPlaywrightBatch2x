//JS Engine
//Line by line execution, JIT complilation

console.log(greeting);
var greeting = "Hello";
console.log(greeting);


// Behind the scenes

//var greeting;               <-- hoiseted with undefined
// console.log(greeting);     <-- undefined
//greeting = "Hello";         <-- assignment stays in place
// console.log(greeting);     <-- Hello


// var a;
console.log(a);
var a = "Pramod";
console.log(a);