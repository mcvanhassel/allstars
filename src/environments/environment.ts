import 'zone.js/plugins/zone-error';

import type { EnvironmentConfiguration } from './environment-configuration';

export const environment: EnvironmentConfiguration = {
  production: false,
  configuration: {
    apiUrl: './assets/data',
  },
};
