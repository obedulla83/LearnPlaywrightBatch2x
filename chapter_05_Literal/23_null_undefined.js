// null vs undefined in JavaScript

// null: a value intentionally set to mean "no value".
// undefined: a variable that has been declared but not given a value.

// null means "no value". It is assigned intentionally.
let user = null;
console.log('user:', user); // null
console.log('type of user:', typeof user); // object

// undefined means a variable has been declared but not assigned.
let product;
console.log('product:', product); // undefined
console.log('type of product:', typeof product); // undefined

// Example of function returning undefined when no value is returned.
function sayHello() {
  let message = 'Hello';
}
let result = sayHello();
console.log('result:', result); // undefined

// Comparison
console.log('null == undefined:', null == undefined); // true
console.log('null === undefined:', null === undefined); // false

// Separate example sequence for null
console.log('\n--- null example sequence ---');
let selectedUser = null;
console.log('selectedUser initial:', selectedUser);
if (selectedUser === null) {
  console.log('selectedUser is intentionally empty');
}
selectedUser = 'Alice';
console.log('selectedUser after assignment:', selectedUser);

// Separate example sequence for undefined
console.log('\n--- undefined example sequence ---');
let item;
console.log('item initial:', item);
if (typeof item === 'undefined') {
  console.log('item has no value yet');
}
item = 'Book';
console.log('item after assignment:', item);
