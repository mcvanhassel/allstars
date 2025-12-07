import { PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { BoxScoreWithPlayer } from '../../../models';

@Component({
  selector: 'tr[allstars-box-score-row]',
  templateUrl: './box-score-row.component.html',
  imports: [PercentPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxScoreRowComponent {
  boxScore = input<BoxScoreWithPlayer>();
}
