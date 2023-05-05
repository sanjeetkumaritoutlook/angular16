//self function invocation defintion ()()
// var data= (
//     function(){

//     }
// )()

//create custom object using  inline object creation json
//getter function return instance variable
//two classes in java with same property???   yes then in javascript also possible
//customer module , bank employee module in react
 //when execute a function, give parathesis;
var age =100; //global variables- does not belong to any object
   
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
 console.log("age -="+age); 
 var custAge =Customer.getAge();

 console.log("type of custAge"+typeof(custAge));
 console.log("value of custAge"+custAge);
 var empAge =Employee.getAge();
 console.log("type of empAge"+typeof(empAge));
 console.log("value of empAge"+empAge);

 //JS is not strict object oriented,but object based,taken properties and behaviour, its scripting language
 console.log("value of Employee.age "+Employee.age);