import { Component, ElementRef, ViewChild } from '@angular/core';
import { SuiteService } from '../services/suite.service';

@Component({
  selector: 'app-suite2',
  templateUrl: './suite2.component.html',
  styleUrls: ['./suite2.component.scss']
})
export class Suite2Component {
  currentSection=1;
  @ViewChild('lobElement') lobElement!:ElementRef;
  @ViewChild('templateElement') templateElement!:ElementRef;
  regionsJson: any=[];
  regions =[
    {label:"US", value:"US"},
    {label:"EU", value:"EU"},
    {label:"APAC", value:"APAC"}
  ];
  lobs:any=[];
  templates:any=[];
  selectedRegion:any=null;
  selectedLob:any = null;
  selectedTemplate:any=null;
  loader =false;
  isSubmitted = false;
  responseFromServer : any;
  showCopied = false;
  errorMsg = null;
  constructor(private suiteService : SuiteService)  {
    this.regionsJson= this.suiteService.getTemplatesList();
   
  }
  ngOnInit(){
  
  }

  //add local repo to own github - https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/
  //git remote add origin https://github.com/sanjeetkumaritoutlook/angular16.git
  //document.getelementbyid(#id).click()
  //valueChange event of FLUID workks in Angular Material - Reactive Form Template Driven form
  //https://stackoverflow.com/questions/50222738/angular-6-material-mat-select-change-method-removed

  valueChanged(value:any, changeType:string){
       console.log(value);
       this.errorMsg = null;

    if(changeType =='regions'){
      this.selectedRegion=value;
      this.selectedLob=null;
      this.selectedTemplate=null;
      // this.lobElement.nativeElement.reset();
      // this.templateElement.nativeElement.reset();
      this.templates=[];
      this.lobs=this.regionsJson[value]?.lobs;
    };
  
    if(changeType =='lobs'){
      this.selectedLob = value;
      this.selectedTemplate = null;
    //  this.templateElement.nativeElement.reset();
      let currentLob=this.lobs.find((item:any)=>item.value == value);
       this.templates=currentLob.templates;
    };
    if(changeType =='templates'){
      this.selectedTemplate=value;
      this.isSubmitted= false;
    };
  }
  
  submitTemplate(){
    this.loader=true;
    const payload ={
      region:this.selectedRegion,
      lob:this.selectedLob,
      template:this.selectedTemplate
    };
  
    this.suiteService.getTestBedDetails(payload).subscribe((res:any)=>{
      console.log(res);
      this.errorMsg = null;
      this.responseFromServer = res;
      this.loader = false;
      this.isSubmitted = true;
    },(error:any) =>{
    console.log(error);
    this.errorMsg= error.message;
    this.loader=false;
    })
  }
  
  copyToClipboard(){
    this.showCopied = true;
    navigator.clipboard.writeText(this.responseFromServer.testBedUrl)
    setTimeout(()=>{
      this.showCopied= false;
    },1500);
  }
  
  downloadMyFile(){
    const link= document.createElement('a');
    link.setAttribute('target','_blank');
    link.setAttribute('href',this.responseFromServer.testBedUrl);
    //link.setAttribute('download',`products.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
  

}
