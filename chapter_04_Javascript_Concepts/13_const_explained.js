const Base_URL = "https://app.thetestingacamedy.com";
//Base_URL = "https://staging.thetestingacademy.com"; 
// TypeError: Assignment to constant variable.  


let name = "pending";
//let name = "pending";
name = "done"; // reassignment allowed

{
    let name = "Dutta";
}
console.log(name); // pending


function say()
{
    let name = "Dutta";
}
say();
say();
say();
