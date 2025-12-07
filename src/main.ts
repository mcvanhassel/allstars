import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { AppConfiguration } from './app/core/app-configuration';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const appConfigurationFactory = (): AppConfiguration => environment.configuration;

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    { provide: AppConfiguration, useFactory: appConfigurationFactory },
  ],
}).catch(err => console.error(err));
