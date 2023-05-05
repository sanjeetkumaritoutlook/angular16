console.log("Program starts here");
//conclude the promise - use async keyword in function
async function myFunction(){
    //parameter to Promise function is exector function(callback)
    //Parameter to callback here -resolve, reject
    //sequential code execution
    console.log("myFunction starts here");
    let prom = new Promise((resolve,reject)=>{
       setTimeout(()=>{
        let rollNo=[60,40,10,30];
        resolve("Done:"+rollNo)

       },10000)
    });
let result = await prom;
console.log("type of result in function:"+typeof(result));
console.log("value of result in function:"+result);
console.log("myFunction ends here");
}

myFunction();
console.log("Program ends  here");
