import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GameFeatureComponent } from './game-feature.component';
import { BoxScoreModule } from './modules/box-score';
import { GameModule } from './modules/game';
import { RosterModule } from './modules/roster';

@NgModule({
  declarations: [GameFeatureComponent],
  imports: [CommonModule, RosterModule, GameModule, BoxScoreModule],
  exports: [GameFeatureComponent],
})
export class GameFeatureModule {}
