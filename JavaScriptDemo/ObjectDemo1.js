// 1- Create custom Object using constructor function syntax
// parametrised contructor or non-parameteries constructor
function Employee(eid,enm,esal)
{
    this.empId=eid;
    this.empName= enm;
    this.empSal=esal;
    //getter - return object variable-instnace --get the object
  //hungarian syntax
  //in case of empty constructor-no parameter, then needed getter setter
    this.getEmpId=function(){
        return this.empId
    }
    //setter -initialize the object info

    this.setEmpId = function(id){
        this.empId =id;
    }

    this.dispEmpInfo=function()
    {
        return "ID:"+this.empId+"Name:"+this.empName+"salary:"+this.empSal;
    }
this.calcEmpAnnumSal= function()
{
    return this.empSal*12;
}
    
}

//instantiate using new Keyword  -create object - means instance create  /reference creation
var emp1=new Employee(11,"Vaishali",100.00);  // Employee constructor
var emp2=new Employee(34,"samir",200.0);
//call setter function
//emp1.setEmpId(100);

console.log("typeof emp1:"+typeof(emp1));

console.log("value of  emp1:"+emp1);


console.log(emp1.dispEmpInfo()+ "Annual Salary:"+emp1.calcEmpAnnumSal());
console.log(emp2.dispEmpInfo()+ "Annual Salary:"+emp2.calcEmpAnnumSal());

//Prototype inheritance-1st way
//reuse Employee object to Manager
function Manager (deptId,deptName)
{
    this.deptId= deptId; //local variable
    this.deptName=deptName;
    this.dispMgrInfo = function(){
        return this.dispEmpInfo()+"DEPTID:"+this.deptId+"DEPTNAME:"+this.deptName
    }
}

Manager.prototype = new Employee(567 , "Sagar kulkarni", 8000.0);
var mgr5= new Manager(10,"NGT PRACTICE");   //reusability

console.log("typeof mgr5:"+typeof(mgr5));
console.log("value of  mgr5:"+mgr5);
console.log(mgr5.dispMgrInfo()+ "Annual Salary:"+mgr5.calcEmpAnnumSal());

//In ECMAScript , its possible to pass more parameters in Manager, but in javascript not possible