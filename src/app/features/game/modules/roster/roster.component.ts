import { Component, Input } from '@angular/core';

import { PlayerWithTeam } from '../../models';

@Component({
  selector: 'allstars-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss'],
})
export class RosterComponent {
  @Input() players: PlayerWithTeam[] | undefined | null;
}
