// 23_null_undefined.js
// Simple explanation and examples: null vs undefined in JavaScript

// undefined: means a variable exists but has no value yet (or a missing parameter/property)
let a;
console.log('a ->', a); // a -> undefined

// null: explicitly set by a programmer to indicate "no value"
let b = null;
console.log('b ->', b); // b -> null

// typeof differences (historic quirk)
console.log('typeof a ->', typeof a); // 'undefined'
console.log('typeof b ->', typeof b); // 'object' (this is a known JS historical quirk)

// Comparisons
console.log('null == undefined ->', null == undefined);   // true (loose equality)
console.log('null === undefined ->', null === undefined); // false (strict equality)

// Numeric operations
console.log('null + 1 ->', null + 1);       // 1 (null coerces to 0)
console.log('undefined + 1 ->', undefined + 1); // NaN (undefined doesn't coerce to a number)

// JSON behavior
console.log('JSON.stringify({x: null}) ->', JSON.stringify({x: null})); // {"x":null}
console.log('JSON.stringify({x: undefined}) ->', JSON.stringify({x: undefined})); // {}

// When you might use each:
// - Use `undefined` when a value hasn't been provided (it's usually the default).
// - Use `null` when you want to explicitly clear or indicate "no value".

// Helpful checks:
function isMissing(value) {
  // returns true for both null and undefined
  return value == null;
}

console.log('isMissing(undefined) ->', isMissing(undefined)); // true
console.log('isMissing(null) ->', isMissing(null));           // true
console.log('isMissing(0) ->', isMissing(0));                 // false
console.log('isMissing("") ->', isMissing(''));             // false

// Best practice recommendations (simple):
// - Prefer `null` when intentionally clearing a value.
// - Use `===`/`!==` for comparisons to avoid surprises.
// - Use `value == null` only when you intentionally want to treat null and undefined the same.
