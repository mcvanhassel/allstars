import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlayerStatPipe } from './player-stat.pipe';

@NgModule({
  declarations: [PlayerStatPipe],
  imports: [CommonModule],
  exports: [PlayerStatPipe],
})
export class PlayerStatModule {}
