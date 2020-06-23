import { Component, Input, OnInit } from '@angular/core';
import { from, Observable, partition } from 'rxjs';
import { scan, switchMap } from 'rxjs/operators';

import { PlayerWithTeam } from '../../models';

@Component({
  selector: 'allstars-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss'],
})
export class RosterComponent implements OnInit {
  @Input() players$!: Observable<PlayerWithTeam[]>;

  starters$!: Observable<PlayerWithTeam[]>;
  reserves$!: Observable<PlayerWithTeam[]>;

  ngOnInit(): void {
    const playersOneByOne$ = this.players$.pipe(switchMap(players => from(players)));
    const [starters$, reserves$] = partition(playersOneByOne$, player => player.starter);
    this.starters$ = this.concatPlayers(starters$);
    this.reserves$ = this.concatPlayers(reserves$);
  }

  private concatPlayers(players$: Observable<PlayerWithTeam>): Observable<PlayerWithTeam[]> {
    return players$.pipe(scan((players: PlayerWithTeam[], player) => [...players, player], []));
  }
}
