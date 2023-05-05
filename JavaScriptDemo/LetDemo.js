//block level scope , function level scope , anonymous fn
//declaration and assignment is different

//var i // just declaration
//var has function scope- more global scope.let has lower scope of block
//cannot increase scope of a variable from let to var- so error
var i=500; //declaration and initilization
(
function(){
    console.log("inside function i="+i);
   // i=400; //re-initializatrion
    var   i=400;  // re-declaration
    {
        var i=300;
        console.log("inside block i="+i);
    }
    console.log("inside function i="+i);
}
)();
console.log("outside function i="+i);