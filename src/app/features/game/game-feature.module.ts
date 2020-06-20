import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GameFeatureComponent } from './game-feature.component';
import { RosterModule } from './modules/roster/roster.module';

@NgModule({
  declarations: [GameFeatureComponent],
  imports: [CommonModule, RosterModule],
  exports: [GameFeatureComponent],
})
export class GameFeatureModule {}
