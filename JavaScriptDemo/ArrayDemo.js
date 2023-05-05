//array enhancements in es6- map, from, filter, sort
//template literal syntax
//parameter to map function is callback function
var intList1=new Array(100,50,200,400,350);
console.log("type of intlist1:"+typeof(intList1));//array 'object'
console.log("length of intlist1:"+intList1.length);
console.log("values of intlist1:"+intList1);

var intList2=new Array(100);
console.log("type of intList2:"+typeof(intList2));//array 'object'
console.log("length of intList2:"+intList2.length);
console.log("values of intList2:"+intList2);
//array with single entry becomes size/length of entry means here 100 commas (,)-- blank entries
console.log("values of intList2:"+intList2[0]);

//create array with single entry -of
var intList3= Array.of(100);
console.log("type of intList3:"+typeof(intList3));//array 'object'
console.log("length of intList3:"+intList3.length);
console.log("values of intList3:"+intList3);
//---add 1000in each entry of intList1  ---from, map
//arrow function defintion as second argument
var result1= Array.from(intList1,(num)=>{return (num+1000)});
console.log("result1 "+result1);
//---add 2000in each entry of intList1  ---from, map
//() =>{}
//arrow function defintion as argument
var result2= intList1.map((num)=>{return (num+2000)});
console.log("result2 "+result2);

//--filter entry from intList1which are greater than 100

var result3= intList1.filter((num)=>{
    if(num>100){
    return num
}
});
console.log("result3 "+result3);
//---sort intList1
var result4=intList1.sort((a,b)=>{
if(a>b){
    return +1;
}
else if(a==b){
    return 0;
}
else{
    return -1;
}
})
console.log("result4 "+result4);
var cityList=new Array("pune", "noida","bombay");
//--sorted as alphabetical order ASCII value for string
var result5=cityList.sort((a,b)=>{
    if(a>b){
        return +1;
    }
    else if(a==b){
        return 0;
    }
    else{
        return -1;
    }
    })

    console.log("result5 "+result5);