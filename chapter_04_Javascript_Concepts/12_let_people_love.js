let a = 10;

let retryCount= 0;
retryCount = retryCount + 1; // reassignment allowed
retryCount = retryCount + 1;
console.log("Retry attemp:", retryCount);

// let retryCount = 5; // SyntaxError: Identifier 'retryCount' has already been declared
// syntax error : re-declaration not allowed

let testStatus = "pending";
{
    if (testStatus === "pending") 
        { 
            let executionTime = 1200;
            console.log("Inside block:", executionTime);
        }
}
console.log(executionTime); // ReferenceError: executionTime is not defined

//{} - //block scope
// if() {}
// function() {}

// let = loyal
// var = variable / traitor


let name = "pending";
name = "done"; // reassignment allowed