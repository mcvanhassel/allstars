import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { createComponentFactory, type Spectator } from '@ngneat/spectator/jest';

import { GameFeatureComponent } from './game-feature.component';
import { environment } from '../../../environments/environment';
import { AppConfiguration } from '../../core/app-configuration';

describe('GameFeatureComponent', () => {
  let spectator: Spectator<GameFeatureComponent>;
  const createComponent = createComponentFactory({
    component: GameFeatureComponent,

    providers: [
      provideHttpClient(),
      provideHttpClientTesting(),
      { provide: AppConfiguration, useValue: environment.configuration },
    ],
    detectChanges: false,
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});
