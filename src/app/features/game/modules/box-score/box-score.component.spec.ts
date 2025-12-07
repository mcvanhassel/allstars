import { createComponentFactory, type Spectator } from '@ngneat/spectator/jest';

import { BoxScoreComponent } from './box-score.component';

describe('BoxScoreComponent', () => {
  let spectator: Spectator<BoxScoreComponent>;
  const createComponent = createComponentFactory({
    component: BoxScoreComponent,
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});
