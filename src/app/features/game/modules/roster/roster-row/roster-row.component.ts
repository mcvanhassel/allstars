import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { positionName } from '../../../../../core/domain/players';

import type { PlayerWithTeam } from '../../../models';

@Component({
  selector: 'tr[allstars-roster-row]',
  templateUrl: './roster-row.component.html',
  imports: [DecimalPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RosterRowComponent {
  player = input<PlayerWithTeam>();

  positionName = positionName;
}
