import { createComponentFactory, type Spectator } from '@ngneat/spectator/jest';

import { BoxScoreRowComponent } from './box-score-row.component';

describe('BoxScoreRowComponent', () => {
  let spectator: Spectator<BoxScoreRowComponent>;
  const createComponent = createComponentFactory({
    component: BoxScoreRowComponent,
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});
