import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, type OnInit } from '@angular/core';
import { combineLatest, type Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { BoxScore, PlayersService, type Player } from '../../core/domain/players';
import { Conference, TeamsService } from '../../core/domain/teams';
import { sortDescendingBy } from '../../core/utils';
import { BoxScoreComponent } from './modules/box-score/box-score.component';
import { GameComponent } from './modules/game/game.component';
import { RosterComponent } from './modules/roster/roster.component';

import type { BoxScoreWithPlayer, PlayerWithTeam } from './models';

@Component({
  selector: 'allstars-game-feature',
  templateUrl: './game-feature.component.html',
  styleUrls: ['./game-feature.component.scss'],
  imports: [AsyncPipe, RosterComponent, GameComponent, BoxScoreComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameFeatureComponent implements OnInit {
  private readonly playersService = inject(PlayersService);
  private readonly teamsService = inject(TeamsService);

  westernPlayers$!: Observable<PlayerWithTeam[]>;
  easternPlayers$!: Observable<PlayerWithTeam[]>;
  westernBoxScores$!: Observable<BoxScoreWithPlayer[]>;
  easternBoxScores$!: Observable<BoxScoreWithPlayer[]>;

  ngOnInit(): void {
    const players$ = this.playersService.getAllStars().pipe(switchMap(this.joinTeams), shareReplay({ refCount: true }));
    const boxScores$ = this.playersService.getBoxScores().pipe(shareReplay({ refCount: true }));

    this.westernPlayers$ = this.filterByConference(players$, Conference.West);
    this.easternPlayers$ = this.filterByConference(players$, Conference.East);

    this.westernBoxScores$ = this.getBoxScores(boxScores$, this.westernPlayers$).pipe(map(sortDescendingBy('starter')));
    this.easternBoxScores$ = this.getBoxScores(boxScores$, this.easternPlayers$).pipe(map(sortDescendingBy('starter')));
  }

  private readonly joinTeams = (players: Player[]): Observable<PlayerWithTeam[]> =>
    combineLatest(players.map(this.joinTeam));

  private readonly joinTeam = (player: Player): Observable<PlayerWithTeam> =>
    this.teamsService.getTeamById(player.teamId).pipe(map(team => ({ ...player, team })));

  private getBoxScores(
    boxScores$: Observable<BoxScore[]>,
    players$: Observable<PlayerWithTeam[]>
  ): Observable<BoxScoreWithPlayer[]> {
    return combineLatest([boxScores$, players$]).pipe(map(this.mergePlayersAndBoxScores));
  }

  private readonly mergePlayersAndBoxScores = ([boxScores, players]: [BoxScore[], Player[]]): BoxScoreWithPlayer[] =>
    players.map(player => {
      const boxScore = boxScores.find(x => x.playerId === player.id) ?? new BoxScore();

      return { ...boxScore, player: player.name, starter: player.starter, team: player.teamId };
    });

  private filterByConference(
    players$: Observable<PlayerWithTeam[]>,
    conference: Conference
  ): Observable<PlayerWithTeam[]> {
    return players$.pipe(map(players => players.filter(player => player.team?.conference === conference)));
  }
}
