import { createComponentFactory, type Spectator } from '@ngneat/spectator/jest';

import { RosterComponent } from './roster.component';

describe('RosterComponent', () => {
  let spectator: Spectator<RosterComponent>;
  const createComponent = createComponentFactory({ component: RosterComponent });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });

  it('should have empty starters and reserves by default', () => {
    spectator = createComponent();
    expect(spectator.component.starters()).toEqual([]);
    expect(spectator.component.reserves()).toEqual([]);
  });
});
