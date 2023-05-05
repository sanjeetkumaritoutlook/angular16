//3-create custom object using object Object
var emp4=new Object(); // same as var emp4={}
emp4.empId=678;
emp4["empNme"]="Payal";
emp4.empSal=3000.0;
emp4.dispEmpInfo=function(){
    return "ID:"+this.empId+"Name:"+this.empNme+"salary:"+this.empSal;
}
emp4["calcEmpAnnualSal"]=function(){
    return this.empSal*12;

}


console.log("typeof emp4:"+typeof(emp4));

console.log("value of  emp4:"+emp4);
console.log(emp4.dispEmpInfo()+ "Annual Salary:"+emp4.calcEmpAnnualSal());

//3rd way -inherit
var mgrPayal = Object.create(emp4);
mgrPayal.deptId=30;
mgrPayal.deptName="Admin";
mgrPayal.dispMgrInfo=function(){
    return this.dispEmpInfo()+"DEPTID:"+this.deptId+"DEPTNAME:"+this.deptName
}
console.log("typeof mgrPayal:"+typeof(mgrPayal));

console.log("value of  mgrPayal:"+mgrPayal);
console.log(mgrPayal.dispMgrInfo()+ "Annual Salary:"+mgrPayal.calcEmpAnnualSal());

//another way of inheritance using __proto__
// var mgrPayal  = new Object;
// mgrPayal.__proto=emp4;
// mgrPayal.deptId=30;

//ES6 is object oriented- class based
//old version of javascript object based
