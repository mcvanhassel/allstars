import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { BoxScore, Player, PlayersService } from '../../core/domain/players';
import { Conference, TeamsService } from '../../core/domain/teams';
import { sortDescendingBy } from '../../core/utils';
import { BoxScoreWithPlayer, PlayerWithTeam } from './models';

@Component({
  selector: 'allstars-game-feature',
  templateUrl: './game-feature.component.html',
  styleUrls: ['./game-feature.component.scss'],
})
export class GameFeatureComponent implements OnInit {
  westernPlayers$!: Observable<PlayerWithTeam[]>;
  easternPlayers$!: Observable<PlayerWithTeam[]>;
  westernBoxScores$!: Observable<BoxScoreWithPlayer[]>;
  easternBoxScores$!: Observable<BoxScoreWithPlayer[]>;

  constructor(private readonly playersService: PlayersService, private readonly teamsService: TeamsService) {}

  ngOnInit(): void {
    const players$ = this.playersService.getAllStars().pipe(switchMap(this.joinTeams), shareReplay({ refCount: true }));
    const boxScores$ = this.playersService.getBoxScores().pipe(shareReplay({ refCount: true }));

    this.westernPlayers$ = this.filterByConference(players$, Conference.West);
    this.easternPlayers$ = this.filterByConference(players$, Conference.East);

    this.westernBoxScores$ = this.getBoxScores(boxScores$, this.westernPlayers$).pipe(map(sortDescendingBy('starter')));
    this.easternBoxScores$ = this.getBoxScores(boxScores$, this.easternPlayers$).pipe(map(sortDescendingBy('starter')));
  }

  private readonly joinTeams = (players: Player[]): Observable<PlayerWithTeam[]> => combineLatest(players.map(this.joinTeam));

  private readonly joinTeam = (player: Player): Observable<PlayerWithTeam> =>
    this.teamsService.getTeamById(player.teamId).pipe(map(team => ({ ...player, team })));

  private getBoxScores(boxScores$: Observable<BoxScore[]>, players$: Observable<PlayerWithTeam[]>): Observable<BoxScoreWithPlayer[]> {
    return combineLatest([boxScores$, players$]).pipe(map(this.mergePlayersAndBoxScores));
  }

  private readonly mergePlayersAndBoxScores = ([boxScores, players]: [BoxScore[], Player[]]): BoxScoreWithPlayer[] =>
    players.map(player => {
      const boxScore = boxScores.find(x => x.playerId === player.id) || new BoxScore();

      return { ...boxScore, player: player.name, starter: player.starter, team: player.teamId };
    });

  private filterByConference(players$: Observable<PlayerWithTeam[]>, conference: Conference): Observable<PlayerWithTeam[]> {
    return players$.pipe(map(players => players.filter(player => player.team?.conference === conference)));
  }
}
