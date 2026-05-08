var name = "Pramod";

var firstName = "Pramod";
var lastName = "Dutta";
// Camel Case

var first_name = "Amit"; // Snake Case

// Pascal Case (starts with capital letter)
var FirstName = "John";
var LastName = "Doe";

// Screaming Snake Case (all uppercase with underscores)
var FIRST_NAME = "JANE";
var LAST_NAME = "SMITH";

// Kebab Case (not valid in JavaScript identifiers, uses hyphens)
// var first-name = "Invalid"; // This would cause a syntax error

// Examples of different naming conventions
var userAge = 25; // camelCase
var user_age = 30; // snake_case
var UserAge = 35; // PascalCase
var USER_AGE = 40; // SCREAMING_SNAKE_CASE

// Function names
function getUserData() {} // camelCase
function get_user_data() {} // snake_case
function GetUserData() {} // PascalCase

// Class names (typically PascalCase)
class UserProfile {}
class user_profile {} // Not conventional

// Constants (often SCREAMING_SNAKE_CASE)
const MAX_USERS = 100;
const maxUsers = 100; // camelCase, also acceptable

console.log("Examples of naming conventions:");
console.log("camelCase:", firstName);
console.log("snake_case:", first_name);
console.log("PascalCase:", FirstName);
console.log("SCREAMING_SNAKE_CASE:", FIRST_NAME);

// Hungarian Notation (prefix indicates type)
var strName = "Alice"; // str for string
var iAge = 25; // i for integer
var bIsActive = true; // b for boolean
var arrNumbers = [1, 2, 3]; // arr for array
var objUser = { name: "Bob", age: 30 }; // obj for object
var fnCallback = function() {}; // fn for function

// More Hungarian notation examples
var strFirstName = "Charlie";
var strLastName = "Brown";
var iUserCount = 10;
var bLoggedIn = false;
var arrUserList = ["Alice", "Bob"];
var objSettings = { theme: "dark" };

console.log("Hungarian Notation examples:");
console.log("strName:", strName);
console.log("iAge:", iAge);
console.log("bIsActive:", bIsActive);
console.log("arrNumbers:", arrNumbers);
console.log("objUser:", objUser); 