//anonymous function
var count;
var add = function(a){    //outer function - is named function so that  you can refer it later
    count=5;  //var stores data with global context(scope)
    //var plus = function(b)
    return function(b){      //anonymous function
     console.log("count "+count);
     return "Result of a= "+a+"and b="+b+"is: "+(a+b);
    }
  
}

//----caller function
var sum= add(10);
console.log("type of sum:"+typeof(sum)); // function is return type
console.log("value of sum:"+sum);

var res= sum(20);
console.log("type of res"+typeof(res)); // string is return type
console.log("value of res"+res);
 console.log("count:"+count);