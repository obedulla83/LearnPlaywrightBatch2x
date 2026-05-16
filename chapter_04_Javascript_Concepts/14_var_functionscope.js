var a = 20;
console.log(a); 
//defination of the function
function printHello()
{
    console.log("Hello The TestingAcademy!");
    var a = 20; //local scope
    console.log(a);
    if (true)
    {
        var a = 30;
        console.log(a);  //30
    }
    console.log("F ->", a);
} 

console.log("G ->", a); 

printHello();