import { AppConfiguration } from '../app/core/app-configuration';

export interface EnvironmentConfiguration {
  production: boolean;
  configuration: AppConfiguration;
}
