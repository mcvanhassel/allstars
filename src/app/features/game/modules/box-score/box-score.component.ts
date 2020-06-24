import { Component, Input } from '@angular/core';

import { BoxScoreWithPlayer } from '../../models';

@Component({
  selector: 'allstars-box-score',
  templateUrl: './box-score.component.html',
  styleUrls: ['./box-score.component.scss'],
})
export class BoxScoreComponent {
  @Input() title: string | undefined;
  @Input() boxScores: BoxScoreWithPlayer[] | undefined | null;
}
