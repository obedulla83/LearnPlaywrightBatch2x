// Lab Exercise: 26_Literal_Number_all.js
// Overview of number types and numeric literals in JavaScript

// === 1) Integer literals ===
let intDecimal = 42;          // decimal integer
let intZero = 0;
let intNegative = -100;

// === 2) Floating-point literals ===
let floatDecimal = 3.1415;    // simple decimal float
let floatLeading = 0.5;       // leading zero before decimal
let floatTrailing = 5.;       // trailing decimal point
let floatExp = 1.5e3;         // exponential notation (1500)
let floatSmall = 1.5e-2;      // exponential notation (0.015)

console.log('intDecimal:', intDecimal);
console.log('floatDecimal:', floatDecimal);
console.log('floatLeading:', floatLeading);
console.log('floatTrailing:', floatTrailing);
console.log('floatExp:', floatExp);
console.log('floatSmall:', floatSmall);

// === 3) Hex, binary, and octal literals ===
let hex = 0xFF;        // 255 in hex
let binary = 0b1010;   // 10 in binary
let octal = 0o755;     // 493 in octal

console.log('hex 0xFF ->', hex);
console.log('binary 0b1010 ->', binary);
console.log('octal 0o755 ->', octal);

// === 4) Numeric separators (readability) ===
let large = 1_000_000_000; // numeric separator allowed
console.log('numeric separator:', large);

// === 5) Special numeric values ===
console.log('Infinity:', Infinity);
console.log('-Infinity:', -Infinity);
console.log('NaN (result of 0/0):', 0/0);

// === 6) Number methods and helpers ===
console.log('Number.isNaN(NaN):', Number.isNaN(NaN));
console.log('isNaN("hello"):', isNaN('hello')); // true (tries coercion)
console.log('Number.isNaN("hello"):', Number.isNaN('hello')); // false (no coercion)

console.log('Number.isFinite(Infinity):', Number.isFinite(Infinity));
console.log('isFinite("10"):', isFinite('10')); // true (coerces)
console.log('Number.isFinite("10"):', Number.isFinite('10')); // false (no coercion)

console.log('Number.isInteger(3):', Number.isInteger(3));
console.log('Number.isInteger(3.1):', Number.isInteger(3.1));

console.log('MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);
console.log('MIN_SAFE_INTEGER:', Number.MIN_SAFE_INTEGER);

// === 7) Safe integer example and overflow issues ===
let big = Number.MAX_SAFE_INTEGER;
console.log('big + 1 === big + 2 ?', big + 1 === big + 2); // true -> precision loss

// === 8) Converting numbers to different radices ===
console.log('255 to binary (toString(2)):', (255).toString(2));
console.log('255 to hex (toString(16)):', (255).toString(16));
console.log('10 to octal (toString(8)):', (10).toString(8));

// === 9) Formatting number output ===
console.log('PI toFixed(2):', Math.PI.toFixed(2));
console.log('PI toExponential(3):', Math.PI.toExponential(3));
console.log('PI toPrecision(4):', Math.PI.toPrecision(4));

// === 10) Parsing numeric strings ===
console.log('parseInt("42px") ->', parseInt('42px', 10));
console.log('parseFloat("3.14abc") ->', parseFloat('3.14abc'));
console.log('Number("  123 ") ->', Number('  123 '));

// === 11) BigInt (for integers beyond safe range) ===
let bigIntLiteral = 123456789012345678901234567890n; // BigInt literal
let bigFromString = BigInt('9007199254740993'); // create from string
console.log('BigInt literal:', bigIntLiteral);
console.log('BigInt from string:', bigFromString);

// BigInt arithmetic
let n1 = 10n;
let n2 = 3n;
console.log('BigInt add:', n1 + n2);
console.log('BigInt multiply:', n1 * n2);
console.log('BigInt div (integer division):', 10n / 4n); // -> 2n

// Mixing Number and BigInt is not allowed directly
try {
  // This will throw a TypeError in modern JS runtimes
  // console.log('mix:', 1n + 2);
} catch (e) {
  console.log('Mixing BigInt and Number throws:', e.message);
}

// Converting between Number and BigInt
console.log('Number(bigFromString):', Number(bigFromString));
console.log('BigInt(Number(42)):', BigInt(42));

// === 12) NaN behavior ===
console.log('NaN === NaN ->', NaN === NaN); // false
console.log('Number.isNaN(NaN) ->', Number.isNaN(NaN)); // true

// === 13) Examples summarizing use-cases ===
console.log('\n--- Examples Summary ---');
console.log('Use Number (IEEE-754) for most numeric work (floats + ints).');
console.log('Use BigInt for precise integer arithmetic beyond 2^53-1.');
console.log('Use Number.isNaN and Number.isFinite to avoid coercion pitfalls.');
console.log('Use parseInt/parseFloat or Number() when converting strings.');

// End of lab
