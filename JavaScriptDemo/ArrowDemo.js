//simple way to write arrow fn. return is optional
//var sum =()=>{}
//paramterized arrow function
/*var sum=(a,b)=>{
    return (a+b)
}
*/
var sum =(a,b)=> (a+b);
console.log(sum(90,100));
//calculate factorial of number using arrow fn
//multiple statement then return statement
var  factorial=(a)=>{
    while(a>0){
    return a*a-1;
}
}
console.log(factorial(3));