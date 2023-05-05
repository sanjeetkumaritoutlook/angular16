//const has similar scope to let- block level scope
//when to use let vs const. only limited scope neededthen let- no need to give broader scope var
var i=500; //declaration and initilization
(
function(){
    const PI = 3.14;
    console.log("inside function i="+i);
   // i=400; //re-initializatrion
    var   i=400;  // re-declaration
    {
        PI=7.18;
        var i=300;
        console.log("inside block i="+i);
    }
    console.log("inside function i="+i);
}
)();
console.log("outside function i="+i);