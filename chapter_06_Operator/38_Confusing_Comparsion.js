// Confusing comparisons in JavaScript: == vs ===

// typeof result section: all comparisons return boolean values
console.log("0 == '' ->", 0 == "", typeof (0 == ""));
console.log("0 === '' ->", 0 === "", typeof (0 === ""));
console.log("1 == true ->", 1 == true, typeof (1 == true));
console.log("1 === true ->", 1 === true, typeof (1 === true));

// 1) String and number coercion
console.log(0 == "");        // true  (empty string converts to 0)
console.log(0 === "");       // false (different types)

console.log("" == 0);        // true  (empty string converts to 0)
console.log("" === 0);       // false (different types)

console.log("\n" == 0);      // true  (whitespace string converts to 0)
console.log("\n" === 0);     // false (different types)

// 2) Boolean coercion
console.log(1 == true);        // true  (boolean converts to number)
console.log(1 === true);       // false (different types)

console.log(false == "0");   // true  ("0" converts to 0, false converts to 0)
console.log(false === "0");  // false (different types)

// 3) Null and undefined
console.log(null == undefined);  // true  (loose equality special case)
console.log(null === undefined); // false (different types)

// 4) Object and array coercion
console.log([] == false);      // true  (empty array converts to empty string -> 0)
console.log([] === false);     // false (different types)

console.log([1] == "1");     // true  (array converts to string "1")
console.log([1] === "1");    // false (different types)

console.log({} == "[object Object]"); // true  (object converts to string)
console.log({} === "[object Object]"); // false (different types)

console.log("5" == [5]);      // true  (array converts to string "5")
console.log("5" === [5]);     // false (different types)

console.log([] == ![]);        // true  (both sides convert to 0 in loose equality)
console.log([] === ![]);       // false (different types)

// 5) Special cases
console.log(NaN == NaN);       // false (NaN is never equal to itself)
console.log(NaN === NaN);      // false (still never equal)

// Interview cheat sheet
// - `==` uses loose equality and can coerce types before comparison.
// - `===` uses strict equality and checks both value and type.
// - `null == undefined` is true, but `null === undefined` is false.
// - `NaN == NaN` is false; use `Number.isNaN()` to test NaN.
// - Objects and arrays compare by reference, not by contents.
// - Expressions like `[] == false` can be true because of coercion.
// - Prefer `===` in most cases for predictable logic.

// Takeaway
// - Loose equality (`==`) can produce surprising results with coercion.
// - Strict equality (`===`) is safer for most comparisons.
// - Use `typeof` to confirm operand types when debugging.
// - Remember the special cases: `null`, `undefined`, `NaN`, and object coercion.
