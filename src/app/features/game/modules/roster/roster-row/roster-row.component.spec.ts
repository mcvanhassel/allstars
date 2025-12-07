import { createComponentFactory, type Spectator } from '@ngneat/spectator/jest';

import { RosterRowComponent } from './roster-row.component';
import { positionName } from '../../../../../core/domain/players';

describe('RosterRowComponent', () => {
  let spectator: Spectator<RosterRowComponent>;
  const createComponent = createComponentFactory({
    component: RosterRowComponent,
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });

  it('should have position name mapping', () => {
    spectator = createComponent();
    expect(spectator.component.positionName).toBe(positionName);
  });
});
