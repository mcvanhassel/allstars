import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GameFeatureComponent } from './game-feature.component';
import { GameModule } from './modules/game';
import { RosterModule } from './modules/roster';

@NgModule({
  declarations: [GameFeatureComponent],
  imports: [CommonModule, RosterModule, GameModule],
  exports: [GameFeatureComponent],
})
export class GameFeatureModule {}
