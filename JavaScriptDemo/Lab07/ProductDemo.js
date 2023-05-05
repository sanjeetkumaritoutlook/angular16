function Product(pid,pnm,pprice,pdesc)
{
    this.productId=pid;
    this.producName= pnm;
    this.productPrice=pprice;
    this.productDescription=pdesc;
   
    //print all product

    this.printAllProduct=function()
    {
        return " Product ID:"+this.productId+"Product Name:"+this.producName+"product Price:"+this.productPrice+"product Description:"+this.productDescription;
    }

}

//take data from user- reference creation
var user1=new Product(11,"Luxury Item",100.00,"Household item");  // Product constructor

console.log("typeof user1:"+typeof(user1));
console.log("value of  user1:"+user1);
console.log(user1.printAllProduct());

/// prototype
function Product1 (productType)
{
    this.productType=productType,
    this.dispProductInfo=function(){
        return this.printAllProduct()+"Product Type:"+this.productType
   
    }
} 

Product1.prototype = new Product(567 , "internal item", 8000.0,"description");
var user2= new Product1("household"); 

console.log("typeof user2:"+typeof(user2));

console.log("value of  user2:"+user2);
console.log(user2.dispProductInfo());
