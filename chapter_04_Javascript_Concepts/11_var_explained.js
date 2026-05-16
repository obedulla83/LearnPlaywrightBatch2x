var a = 10; //Global scope
//let l = 20;

// var is function-scoped, while let is block-scoped
console.log(a);  // Global scope

function printHello()
{
    console.log("Hello The TestingAcademy");
    var a = 20;
    console.log(a);

    if (true) 
    { var a =30;
        console.log(a);
    }
}

printHello();

var a  = 50;
console.log(a);
//var === trump, flipper, dual faced, no turst worthy, can be redeclared and reassigned, function-scoped, hoisted with undefined