var greetMe=function(firstName){
    return "Welcome:"+firstName;
}

var msg =greetMe("Vaishali");  // typeof -string
//callback is a function as parameter in another function - js memory management  heap stack
//closure is function to return another function definition -parameterized fuction
var wishMe= function(callback,country){
    console.log("type of callback:"+typeof(callback));
    console.log("value of callback"+callback);
    console.log(callback("Vaishali")+ " In "+country); 
}
//-0---
wishMe(greetMe,"India");