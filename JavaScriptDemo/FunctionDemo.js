// 1st way to create function in js conventional way
// function greetMe(fname,year){
//     return "Happy new year:" +fname+"Year:"+year;
// }

//2nd way to create function
var greetMe =function(fname,year){
        return "Happy new year:" +fname+"Year:"+year;
    }
console.log("typeof of greetMe" +typeof(greetMe) );
console.log("value of greetMe" +greetMe ); //o-p complete function defention

//3rd way
var greetMe =new Function("fname","year",   
    "return 'Happy new year:' +fname+'Year:'+year;")   //Function is predefined object- it is function constructor
    // function defintion is third parameter 
    //https://javascript.info/new-function

// thia is not ES6- JS 2015
//call function
//write function defintion in same file and call it same file
var msg =greetMe("sanjeet",2022);
console.log("type of msg:"+typeof(msg));
console.log("value of msg"+msg);