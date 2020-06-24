import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SumModule } from '../../../../core/sum';
import { BoxScoreRowComponent } from './box-score-row/box-score-row.component';
import { BoxScoreComponent } from './box-score.component';

@NgModule({
  declarations: [BoxScoreComponent, BoxScoreRowComponent],
  imports: [CommonModule, SumModule],
  exports: [BoxScoreComponent],
})
export class BoxScoreModule {}
