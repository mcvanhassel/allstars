import { Component, Input } from '@angular/core';

import { BoxScoreWithPlayer } from '../../../models';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tr[allstars-box-score-row]',
  templateUrl: './box-score-row.component.html',
})
export class BoxScoreRowComponent {
  @Input() boxScore: BoxScoreWithPlayer | undefined;
}
