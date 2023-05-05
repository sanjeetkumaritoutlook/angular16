//cannot overload constructor
//empty constructor
//getter function returns property value (or) to fetch
//setter-to initiliaze object
//didnt call getter and setter function explicitly as _ is used like  _empId
//abstrraction - data hiding
//encapsulation- object property should be secured and not visible
class Employee{
    constructor(){
    console.log("constructor started");
    this._empId_=0;
    this._empName_="";
    this.empSal=0.0;
    console.log("constructor ended");
    }

    get empId(){
        console.log("getter for empId executed");
        return this._empId_;
        }
      set empId(eid){
        console.log("setter for empId executed");
      this._empId_=eid;
      }  

      
    get empName(){
        console.log("getter for empName executed");
        return this._empName_;
        }
      set empName(ename){
        console.log("setter for empName executed");
      this._empName_=ename;
      }  

      //conventional way to write setter getter like Java
      getEmpSal(){
        console.log("getter for empSal executed");
         return this.empSal;
      }
      setEmpSal(esal){
        console.log("setter for empSal executed");
        this.empSal=esal;
      }
      calcEmpannualSal(){
        return (this.empSal)*12
      }
}

var emp1= new Employee();
emp1.empId=1122;
emp1.empName="vaishali";
//explicitly called here
emp1.setEmpSal(100);
console.log("-------------");
console.log("EMPID:"+emp1.empId+"Salary:"+emp1.getEmpSal());

//inheritance in es6 can be done through extend, super, class
class Manager extends Employee{
    //paramterized connstructor-so not required getter setter
    constructor(dID,dName){
        super();
        this.deptId=dID;
        this._deptName_=dName;
        console.log("In manager constructor "+this._deptName_);
    }
}
//----

var emp2=new Manager (10,"NGT Practive");
emp2.empId=999;
emp2.setEmpSal(9999.0);
console.log("-----------");
console.log("EMPID:"+emp2.empId+"SALARY:"+emp2.getEmpSal()+"DeptId:"+emp2.deptId+
"DEPT Name:"+emp2._deptName_)

//pre-formatted output + as concatation
//template literal means backtick (`)  operator and curly braces- ${emp2.empId}

console.log(`EMPID:${emp2.empId}
SALARY:${emp2.getEmpSal()} DeptId: 
${emp2.deptId}
DEPT Name: ${emp2._deptName_}`);