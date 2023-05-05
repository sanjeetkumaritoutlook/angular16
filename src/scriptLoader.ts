export function differentialScriptLoader(esmScriptPath:any, legacyScriptPath:any, script:any){
  script = document.createElement('script');
  if('noModule' in script){
    script.type ='module';
    script.src = esmScriptPath; 
  } else{
    script.type ='text/javascript';
    script.src = legacyScriptPath; 
  }
  document.head.appendChild(script);
}

export function ScriptLoader(ScriptPath:any,script:any){
  script.type ='text/javascript';
    script.src = ScriptPath; 
    document.head.appendChild(script);
}

export function styleSheetLoader(stylesheet:any){
  const element= document.createElement('link');
  element.setAttribute('rel','stylesheet');
  element.setAttribute('href',stylesheet);
    document.head.appendChild(element);
}