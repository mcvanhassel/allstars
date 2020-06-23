import { Component, Input } from '@angular/core';

import { PlayerWithTeam } from '../../../models';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'tr[allstars-roster-row]',
  templateUrl: './roster-row.component.html',
})
export class RosterRowComponent {
  @Input() player: PlayerWithTeam | undefined;
}
