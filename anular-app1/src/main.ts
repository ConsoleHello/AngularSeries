import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig, // Spread the existing appConfig object
  providers: [...(appConfig.providers || []), provideHttpClient()], // Merge additional providers
}).catch((err) => console.error(err));
