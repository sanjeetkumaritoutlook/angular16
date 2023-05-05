//all outer function variables are available in inner function - concept of closure
//where you are executing the function is important- how you call the function
//Functional programming
//function to return another function defition
//use these closure in event handlers - event handlers are function
//old javascript version
//functions and objects are created on heap-dynamic memory
var add = function(a){    //outer function - is named function so that  you can refer it later
    var count=5;  //var stores data with global context(scope)
    //var plus = function(b)
    function plus(b){      //nested function
     console.log("count "+count);
     return "Result of a= "+a+"and b="+b+"is: "+(a+b);
    }
    return plus;

    //var r= plus(20);
    //return r;
}

//----caller function
var sum= add(10);
console.log("type of sum:"+typeof(sum)); // function is return type
console.log("value of sum:"+sum);

var res= sum(20);
console.log("type of res"+typeof(res)); // string is return type
console.log("value of res"+res);
// console.log("count:"+count);