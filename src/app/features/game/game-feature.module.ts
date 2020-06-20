import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GameFeatureComponent } from './game-feature.component';

@NgModule({
  declarations: [GameFeatureComponent],
  imports: [CommonModule],
  exports: [GameFeatureComponent],
})
export class GameFeatureModule {}
