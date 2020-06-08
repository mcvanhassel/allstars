import { NgModule } from '@angular/core';

import { environment } from '../../../environments/environment';
import { AppConfiguration } from './app-configuration';

const appConfigurationFactory = (): AppConfiguration => environment.configuration;

@NgModule({
  providers: [{ provide: AppConfiguration, useFactory: appConfigurationFactory }],
})
export class AppConfigurationModule {}
