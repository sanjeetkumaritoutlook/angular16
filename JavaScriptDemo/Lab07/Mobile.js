class Mobile{
    constructor(){
    
    this._mobileId_=0;
    this._mobileName_="";
    this.mobileCost=0.0;
   
    }

    get mobileId(){
       
        return this._mobileId_;
        }
      set mobileId(eid){
       
      this._mobileId_=eid;
      }  

      
    get mobileName(){
        
        return this._mobileName_;
        }
      set mobileName(ename){
      
      this._mobileName_=ename;
      }  

      
      getMobileCost(){
       
         return this.mobileCost;
      }
      setMobileCost(esal){
       
        this.mobileCost=esal;
      }
      printMobileDetail(){
       console.log("mobile details");
      }
}


var redmi= new Mobile();
console.log("-------------");
console.log("MOBILE ID:"+redmi.mobileId+"Mobile Cost:"+redmi.getMobileCost());

class BasicPhone extends Mobile{
    //paramterized connstructor-so not required getter setter
    constructor(mTYPE){
        super();
        this.mobileType=mTYPE;
       
        console.log("In BasicPhone constructor "+this.mobileType);
    }
}

var nokia=new BasicPhone ("1100 model");
console.log("-----------");
console.log("MOBILE ID:"+nokia.empId+"MOBILE COST:"+nokia.getMobileCost()+
"Mobile Type:"+nokia.mobileType);



class SmartPhone extends Mobile{
    //paramterized connstructor-so not required getter setter
    constructor(mTYPE){
        super();
        this.mobileType=mTYPE;
       
        console.log("In SmartPhone constructor "+this.mobileType);
    }
}

var oneplus=new SmartPhone ("One plus 9");
console.log("-----------");
console.log("MOBILE ID:"+oneplus.empId+"MOBILE COST:"+oneplus.getMobileCost()+
"Mobile Type:"+oneplus.mobileType)