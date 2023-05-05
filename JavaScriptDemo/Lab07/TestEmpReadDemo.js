const axios=require("axios");
var prom=axios.get("http://localhost:3000/emps");
prom.
then((empRes)=>{console.log(empRes)})
.catch((empError)=>{console.log(empError)})