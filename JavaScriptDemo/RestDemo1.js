//same operator when defining it rest operator
//same operator--while calling-spread operator
var sum= function(...nums){  //rest operator act as array-iterable object
    console.log("type of nums:"+typeof(nums));//Array is an object
    console.log("value of nums:"+nums);
    let sum=0;
    for(num of nums){     //enhanced for loop to iterate
        sum=sum+num;
    }
    return sum;
}
//here javascript is not compile time language- only runtime
//compiler and runtime environment
//--caller----
console.log(sum(10,20));
console.log(sum(10,20,30));
console.log(sum(10,20,30,40));
console.log(sum(10,20,30,40,50));
//create array in javascript using Array()
var intList=new Array(50,100,75,150,200,175,30);
//conventionalway to add
console.log(sum(intList[0],intList[1]));
//ES6 spread operator--- same operators  -heavily used in React
console.log(sum(...intList));  //destructuring


//what you type , becomes the type - so javascript is loosely typed
//-----destructuring syntax for developer convenience----- sequential
//entry from that intList in somevariable
//conventional forloop  -array is iterated in that times
for(let i=0;i<intList.length;i++){
    console.log(intList[i]);
}
//enhanced for loop
//-----destructuring syntax for developer convenience-----
//additional overhead if more entries
let [num1,num2,num3]=intList;
console.log("num1..."+num1);
//JSON Object
let Employee= {"empId":555,"empName":"aaa","empSal":555};
let {empName,empId,empSal}=Employee;
console.log("ID:"+empId);

//Array with squarebracked []
//json by curly bracked {}

