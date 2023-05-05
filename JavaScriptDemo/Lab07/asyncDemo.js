//async/await in es6
//async always ensure that function returns 
//promise object .if function return anything else other than
//promise,then it will convert that response into promise
var sayHello = async function(fname)
{
if(2==3)
{
    return "Welcome: "+fname;
    }
    else{
        throw new  Error("not wishing me")
    }
};
var data=sayHello("Vaishali");
console.log("type ofdata"+typeof(data));
console.log("value  ofdata"+data);
data.
then((res)=>{console.log(res)})
.catch((err)=>{console.log("....."+err)})
