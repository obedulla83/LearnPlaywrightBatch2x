// JavaScript Identifier Rules and Examples

// 1) Valid identifier names
var name = "Alice";
var _count = 42;
var $total = 100;
var userName123 = "Bob";
var camelCaseExample = true;
var PascalCaseExample = false;

// 2) Invalid identifier names (uncomment to see syntax errors)
// var 1stUser = "Error";
// var user-name = "Error";
// var var = "Error"; // reserved word
// var function = "Error"; // reserved word
// var let = "Error"; // reserved word

// 3) Rules summary in code form
function isValidIdentifier(name) {
  return /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) && !isReservedWord(name);
}

function isReservedWord(name) {
  const reserved = [
    'await', 'break', 'case', 'catch', 'class', 'const', 'continue',
    'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export',
    'extends', 'false', 'finally', 'for', 'function', 'if', 'import',
    'in', 'instanceof', 'let', 'new', 'null', 'return', 'super',
    'switch', 'this', 'throw', 'true', 'try', 'typeof', 'var', 'void',
    'while', 'with', 'yield', 'implements', 'interface', 'package',
    'private', 'protected', 'public', 'static'
  ];
  return reserved.includes(name);
}

const testIdentifiers = [
  'name', '_count', '$total', 'userName123', 'camelCaseExample',
  '1stUser', 'user-name', 'var', 'function', 'let', 'class'
];

for (const id of testIdentifiers) {
  console.log(id + ': ' + isValidIdentifier(id));
}

// 4) Naming best practices
var firstName = "Charlie";
var lastName = "Delta";
var scoreValue = 95;
var isActive = true;

console.log('firstName:', firstName);
console.log('lastName:', lastName);
console.log('scoreValue:', scoreValue);
console.log('isActive:', isActive);

// 5) Reserved keyword examples (cannot be used as identifiers)
const reservedExamples = ['let', 'const', 'class', 'function', 'return'];
console.log('Reserved keywords:', reservedExamples.join(', '));
