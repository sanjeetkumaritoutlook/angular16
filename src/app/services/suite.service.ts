import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as rData from './../../assets/lobList.json';
@Injectable({
  providedIn: 'root'
})
export class SuiteService {
apiUrl ='https://mocki.io/v1/51f8f27c-4ed8-498f-98ca-1a203cb8bd85';
//apiUrl ='https://mocki.io/v1/51f8f27c-4ed8d-498f-98ca-1a203cb8bd85';

jsonData:any =rData;
regionsJson:any = this.jsonData.regions;
//JSON minify - opposite of JSON Beautifier
//https://codebeautify.org/jsonminifier
//regionsJson:any='{"US":{"lobs":[{"label":"US Marine","value":"MARINE","templates":[{"label":"Ocean Marine Project Cargo Policy","value":"MARINE_OCEAN_MARINE_PROJECT_CARGO_POLICY"},{"label":"Marine General Liability Policy","value":"MARINE_GENERAL_LIABILITY_POLICY"}]},{"label":"US Casualty Envrionmental ","value":"CASUALTYENV","templates":[{"label":"Contractors & Professional Services Liability Policy(UD)","value":"CASUALTYENV_MARINE_PROJECT_CARGO_POLICY"},{"label":"Marine General Liability Policy","value":"MARINE_GENERAL_LIABILITY_POLICY"}]}]},"EU":{"lobs":[{"label":"US Marine_EU","value":"MARINE_EU","templates":[{"label":"Ocean Marine Project Cargo Policy_EU","value":"MARINE_OCEAN_MARINE_PROJECT_CARGO_POLICY_EU"},{"label":"Marine General Liability Policy_EU","value":"MARINE_GENERAL_LIABILITY_POLICY_EU"}]},{"label":"US Casualty Envrionmental_EU","value":"CASUALTYENV_EU","templates":[{"label":"Contractors & Professional Services Liability Policy(UD)_EU","value":"CASUALTYENV_MARINE_PROJECT_CARGO_POLICY_EU"},{"label":"Marine General Liability Policy_EU","value":"MARINE_GENERAL_LIABILITY_POLICY_EU"}]}]},"APAC":{"lobs":[{"label":"US Marine_APAC","value":"MARINE_APAC","templates":[{"label":"Ocean Marine Project Cargo Policy_APAC","value":"MARINE_OCEAN_MARINE_PROJECT_CARGO_POLICY_APAC"},{"label":"Marine General Liability Policy_APAC","value":"MARINE_GENERAL_LIABILITY_POLICY_APAC"}]},{"label":"US Casualty Envrionmental_APAC ","value":"CASUALTYENV_APAC","templates":[{"label":"Contractors & Professional Services Liability Policy(UD)_APAC","value":"CASUALTYENV_MARINE_PROJECT_CARGO_POLICY_APAC"},{"label":"Marine General Liability Policy_APAC","value":"MARINE_GENERAL_LIABILITY_POLICY_APAC"}]}]}}';

  constructor(private http:HttpClient) {  }
  getTemplatesList(){
    return this.regionsJson;
  };
  getTestBedDetails(payload:any){
    let params=new HttpParams();
    params= params.append('region',payload.region);
    params= params.append('lob',payload.lob);
    params= params.append('template',payload.template);
    return this.http.get(this.apiUrl,{params:params});
  }
}
