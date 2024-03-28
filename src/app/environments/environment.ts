//This file can be replaced during build by using the `fileReplacements` array
//`ng build --prod` replaces  `environment.ts` with `environment.prod.ts`
//The list of file replacements can be found in `angular.json`

export const environment ={
    production:false,
    fluidScriptESM: 'https://dsfe50dspcxki.cloudfront.net/fluid/build/fluid.esm.js',
    fluidScriptLegacy: 'https://dsfe50dspcxki.cloudfront.net/fluid/build/fluid.js',
    fluidStyleSheet: 'https://dsfe50dspcxki.cloudfront.net/fluid/build/fluid.css'
}

/*
* For easier debugging in development mode,you can import the following file
* to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
*
* This import should be commented out inproduction mode because it will have a negative impact
* on performance if an error is thrown.
*/
//import 'zone.js/plugins/zone-error';  //Included with Angular CLI. 