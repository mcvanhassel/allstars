import { Component, Input, OnInit } from '@angular/core';
import { from, Observable, partition } from 'rxjs';
import { map, scan, switchMap } from 'rxjs/operators';

import { sortDescendingBy } from '../../../../core/utils';
import { PlayerWithTeam } from '../../models';

@Component({
  selector: 'allstars-roster',
  templateUrl: './roster.component.html',
})
export class RosterComponent implements OnInit {
  @Input() title: string | undefined;
  @Input() players$!: Observable<PlayerWithTeam[]>;

  starters$!: Observable<PlayerWithTeam[]>;
  reserves$!: Observable<PlayerWithTeam[]>;

  ngOnInit(): void {
    const playersOneByOne$ = this.players$.pipe(switchMap(players => from(players)));
    const [starters$, reserves$] = partition(playersOneByOne$, player => player.starter);
    this.starters$ = this.concatPlayers(starters$).pipe(map(sortDescendingBy('position')));
    this.reserves$ = this.concatPlayers(reserves$).pipe(map(sortDescendingBy('position')));
  }

  private concatPlayers(players$: Observable<PlayerWithTeam>): Observable<PlayerWithTeam[]> {
    return players$.pipe(scan((players: PlayerWithTeam[], player) => [...players, player], []));
  }
}
