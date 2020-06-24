import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaxModule } from '../../../../core/max';
import { SumModule } from '../../../../core/sum';
import { PlayerStatModule } from '../player-stat';
import { GameComponent } from './game.component';

@NgModule({
  declarations: [GameComponent],
  imports: [CommonModule, MaxModule, SumModule, PlayerStatModule],
  exports: [GameComponent],
})
export class GameModule {}
