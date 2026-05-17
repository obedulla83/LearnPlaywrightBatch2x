// Tempalte Literally

let firstname = "Pramod";
let fullname = `Hi ${firstname} Dutta`; // template literal with variable interpolation
console.log(fullname); // Output: Hi Pramod Dutta

//const env = "staging";
let env = "staging";

env = "prod";
const userId = 12345;
const apiUrl = `https://api-${env}.tekion.com/users/${userId}`; // template literal with variable interpolation
console.log(apiUrl); // Output: https://api-staging.tekion.com/users/12345



//Playwright
const rowIndex = 3;
const columnName = "email";
await page.locator(`[data-row="${rowIndex}"] [data-col="${columnName}"]`).click(); // template literal with variable interpolation


//Logs 
const testName = "Login Test";
const status = "FAILED";
const duration = 2.3;
console.log(`[${status}] ${testName} completed in ${duration}s`); // template literal with variable interpolation

const testCase = "checkout_flow";
const timestamp = Date.now();
await page.screenshot({ path: `screenshots/${testCase}_${timestamp}.png` }); // template literal with variable interpolation