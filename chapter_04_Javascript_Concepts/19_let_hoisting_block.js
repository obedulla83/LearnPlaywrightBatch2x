//let us Block-Scoped

let x = "global";
if (true)
{
    //TDZ for block-scoped variable 'x' starts here
    // console.log(x); //reference error: (Not "Global")
    console.log(x);    // TDZ ends

    let x = "block";
    console.log(x);
}