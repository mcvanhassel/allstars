import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { Player, PlayersService } from '../../core/domain/players';
import { Conference, TeamsService } from '../../core/domain/teams';
import { PlayerWithTeam } from './models';

@Component({
  selector: 'allstars-game-feature',
  templateUrl: './game-feature.component.html',
  styleUrls: ['./game-feature.component.scss'],
})
export class GameFeatureComponent implements OnInit {
  westernPlayers$!: Observable<PlayerWithTeam[]>;
  easternPlayers$!: Observable<PlayerWithTeam[]>;

  constructor(private readonly playersService: PlayersService, private readonly teamsService: TeamsService) {}

  ngOnInit(): void {
    const players$ = this.playersService.getAllStars().pipe(switchMap(this.joinTeams), shareReplay({ refCount: true }));

    this.westernPlayers$ = this.filterByConference(players$, Conference.West);
    this.easternPlayers$ = this.filterByConference(players$, Conference.East);
  }

  private readonly joinTeams = (players: Player[]): Observable<PlayerWithTeam[]> => combineLatest(players.map(this.joinTeam));

  private readonly joinTeam = (player: Player): Observable<PlayerWithTeam> =>
    this.teamsService.getTeamById(player.teamId).pipe(map(team => ({ ...player, team })));

  private filterByConference(players$: Observable<PlayerWithTeam[]>, conference: Conference): Observable<PlayerWithTeam[]> {
    return players$.pipe(map(players => players.filter(player => player.team?.conference === conference)));
  }
}
