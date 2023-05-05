import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './app/environments/environment.prod';
import { differentialScriptLoader, styleSheetLoader } from './scriptLoader';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  //Add FLUID script using host service
  const fluidScript = document.createElement('script');
  differentialScriptLoader(environment.fluidScriptESM, environment.fluidScriptLegacy, fluidScript);
  styleSheetLoader(environment.fluidStyleSheet);