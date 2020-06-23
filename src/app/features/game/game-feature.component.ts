import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { Player, PlayersService } from '../../core/domain/players';
import { TeamsService } from '../../core/domain/teams';
import { PlayerWithTeam } from './models';

@Component({
  selector: 'allstars-game-feature',
  templateUrl: './game-feature.component.html',
})
export class GameFeatureComponent implements OnInit {
  players$!: Observable<PlayerWithTeam[]>;

  constructor(private readonly playersService: PlayersService, private readonly teamsService: TeamsService) {}

  ngOnInit(): void {
    this.players$ = this.getAllStarPlayers();
  }

  private getAllStarPlayers(): Observable<PlayerWithTeam[]> {
    return this.playersService.getAllStars().pipe(switchMap(this.joinTeams), shareReplay({ refCount: true }));
  }

  private readonly joinTeams = (players: Player[]): Observable<PlayerWithTeam[]> => combineLatest(players.map(this.joinTeam));

  private readonly joinTeam = (player: Player): Observable<PlayerWithTeam> =>
    this.teamsService.getTeamById(player.teamId).pipe(map(team => ({ ...player, team })));
}
