//Parameter we pass to  promise constructor is an executor function
//resolve is predefined function
//deliberate delaytimer function
// ()=>{}
var prom=new Promise((resolve,reject)=>{
    console.log("executor functin starts here");
setTimeout(()=>{
let rollno=[90,50,30,10];
resolve(rollno);
//reject("error while reading roll no");
},100);
console.log("executor functin ends here");
})

//----
prom.
then((rollNoRes)=>{console.log(rollNoRes)})
.catch((rollNoerror)=>{console.log(rollNoerror)})
console.log("prom ends here");
