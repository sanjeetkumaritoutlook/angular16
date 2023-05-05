//anonymous function
//self function invoking
//one time purpose- in unit testing -inline and anonymous in test cases
//multiple calls- then you have to name the function
//variable to keep return value of function
//React syntax is tricky and difficult for novice programmers- so fundamentals of JS must
var count;
var res = (function(a){    //outer function - is named function so that  you can refer it later
    count=5;  //var stores data with global context(scope)
   
    return function(b){      //anonymous function
     console.log("count "+count);
     return "Result of a= "+a+"and b="+b+"is: "+(a+b);
    }
  
})(10)(20);
//------caller--
console.log("type of res: "+typeof(res));  
console.log("value of res: "+res);

//program more readable and maintable
var log=console.log;
log();
