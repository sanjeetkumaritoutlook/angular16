//2)create custom object using inline object creation syntax- json notation
//values are initialized here itself- for testing purpose
//single object creation in this syntax, not multiple
var emp3={
  empId:888,
  empName:"Ramesh",
  empSal:6000.0,
  dispEmpInfo:function()
    {
        return "ID:"+this.empId+"Name:"+this.empName+"salary:"+this.empSal;
    },
calcEmpAnnumSal:function()
{
    return this.empSal*12;
},
//setter -initialize the object info

setEmpId : function(id){
    this.empId =id;
}
}

console.log("typeof emp3:"+typeof(emp3));

console.log("value of  emp3:"+emp3);
console.log(emp3.dispEmpInfo()+ "Annual Salary:"+emp3.calcEmpAnnumSal());

//2nd way __proto__  inheritance
var mgrRamesh=
{
    deptId:20,
    deptName:"account",
    dispMgrInfo:function(){
        return this.dispEmpInfo()+"DEPTID:"+this.deptId+"DEPTNAME:"+this.deptName
   
    }
} 

//----inherit
mgrRamesh.__proto__=emp3;    

console.log("typeof mgrRamesh:"+typeof(mgrRamesh));

console.log("value of  mgrRamesh:"+mgrRamesh);
console.log(mgrRamesh.dispMgrInfo()+ "Annual Salary:"+mgrRamesh.calcEmpAnnumSal());
