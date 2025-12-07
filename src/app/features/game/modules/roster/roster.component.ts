import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { RosterRowComponent } from './roster-row/roster-row.component';
import { sortDescendingBy } from '../../../../core/utils';

import type { PlayerWithTeam } from '../../models';

@Component({
  selector: 'allstars-roster',
  templateUrl: './roster.component.html',
  imports: [RosterRowComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RosterComponent {
  title = input<string>();
  players = input<PlayerWithTeam[]>([]);

  starters = computed(() => {
    const starters = this.players().filter(p => p.starter);
    return sortDescendingBy<PlayerWithTeam>('position')(starters);
  });

  reserves = computed(() => {
    const reserves = this.players().filter(p => !p.starter);
    return sortDescendingBy<PlayerWithTeam>('position')(reserves);
  });
}
