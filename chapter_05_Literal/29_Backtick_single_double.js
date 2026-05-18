// 29_Backtick_single_double.js
// One-line explanation: Backticks (`) support interpolation (${...}) and multi-line strings; single (') and double (") quotes behave the same for plain strings.

const single = 'Hello single';
const double = "Hello double";
const name = 'Alice';
const backtick = `Hello ${name}
This is multi-line with interpolation.`;

console.log(single);
console.log(double);
console.log(backtick);