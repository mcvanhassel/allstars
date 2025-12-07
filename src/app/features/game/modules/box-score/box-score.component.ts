import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { BoxScoreRowComponent } from './box-score-row/box-score-row.component';
import { SumPipe } from '../../../../core/sum/sum.pipe';

import type { BoxScoreWithPlayer } from '../../models';

@Component({
  selector: 'allstars-box-score',
  templateUrl: './box-score.component.html',
  styleUrls: ['./box-score.component.scss'],
  imports: [SumPipe, BoxScoreRowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxScoreComponent {
  title = input<string>();
  boxScores = input<BoxScoreWithPlayer[] | null>();
}
