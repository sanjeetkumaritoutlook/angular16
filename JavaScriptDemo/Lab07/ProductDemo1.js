var Product={
    productId:888,
    producName:"Luxury",
    productPrice:6000.0,
    productDescription:"household",
    printAllProduct:function()
      {
        return " Product ID:"+this.productId+"Product Name:"+this.producName+"product Price:"+this.productPrice+"product Description:"+this.productDescription;
    
      },
 
  }

  
console.log("typeof Product:"+typeof(Product));
console.log("value of  Product:"+Product);
console.log(Product.printAllProduct());

//__proto__
var Product1=
{
    productType:"household item",
    dispProductInfo:function(){
        return this.printAllProduct()+"Product Type:"+this.productType
   
    }
} 

//----inherit
Product1.__proto__=Product;    

console.log("typeof Product1:"+typeof(Product1));
console.log("value of  Product1:"+Product1);
console.log(Product1.dispProductInfo());


var Product2=
{
    productCategory:"TV set",
    dispProduct2Info:function(){
        return this.printAllProduct()+"Product Category:"+this.productCategory
   
    }
} 

//----inherit
Product2.__proto__=Product;    

console.log("typeof Product2:"+typeof(Product2));
console.log("value of  Product2:"+Product2);
console.log(Product2.dispProduct2Info());

