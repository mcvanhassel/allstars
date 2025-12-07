import { createComponentFactory, type Spectator } from '@ngneat/spectator/jest';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let spectator: Spectator<GameComponent>;
  const createComponent = createComponentFactory({
    component: GameComponent,
  });

  it('should create', () => {
    spectator = createComponent();
    expect(spectator.component).toBeTruthy();
  });
});
