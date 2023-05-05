
var age =100;
var Customer={
   firstName:"Vaishali",
   age:50,
   getAge:function(){
       return this.age;
   }
}
//-------

var Employee={
   firstName:"PayalDani",
   age:25,
   getAge:function(){
       return this.age;
   }
}

//----caller
console.log("age -="+age);  //100
var custAge =Customer.getAge;
//associate the context of function  by binding with object- pass object variable in bind
//in React, for event handlers ,  bind is used
var custBoundage= custAge.bind(Customer);
console.log("type of custAge"+typeof(custAge));//function
console.log("value of custAge"+custAge);  // function defintion
console.log("call custAge"+custAge()); //undefined  paranthesis to call

console.log("type of custBoundage"+typeof(custBoundage));//function
console.log("value of custBoundage"+custBoundage);  // function defintion
console.log("call custBoundage"+custBoundage()); 

var empAge =Employee.getAge;
var empBoundAge = empAge.bind(Employee);

console.log("type of empAge"+typeof(empAge));
console.log("value of empAge"+empAge);
console.log("call empAge"+empAge());

console.log("type of empBoundAge"+typeof(empBoundAge));
console.log("value of empBoundAge"+empBoundAge);
console.log("call empBoundAge"+empBoundAge());
