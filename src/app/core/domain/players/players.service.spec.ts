import { createHttpFactory, HttpMethod, type SpectatorHttp } from '@ngneat/spectator/jest';

import { BoxScore, Position, type BoxScoreDTO, type Player } from './models';
import { PlayersService } from './players.service';
import { environment } from '../../../../environments/environment';
import { AppConfiguration } from '../../app-configuration';

describe('PlayersService', () => {
  let spectator: SpectatorHttp<PlayersService>;
  const createHttp = createHttpFactory({
    service: PlayersService,
    providers: [{ provide: AppConfiguration, useValue: environment.configuration }],
  });

  beforeEach(() => {
    spectator = createHttp();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should get all stars', () => {
    const mockPlayers: Player[] = [
      {
        id: '1',
        name: 'Player 1',
        teamId: 'LAL',
        position: Position.Center,
        starter: true,
        votes: 1000,
        selections: 5,
      },
    ];

    spectator.service.getAllStars().subscribe(players => {
      expect(players).toEqual(mockPlayers);
    });

    const req = spectator.expectOne(`${environment.configuration.apiUrl}/players.json`, HttpMethod.GET);
    req.flush(mockPlayers);
  });

  it('should get box scores and convert to BoxScore instances', () => {
    const mockDTOs: BoxScoreDTO[] = [
      { playerId: '1', min: 30, fgm: 10, fga: 20, tpm: 5, tpa: 10, ftm: 8, fta: 10 } as unknown as BoxScoreDTO,
    ];

    spectator.service.getBoxScores().subscribe(boxScores => {
      expect(boxScores).toHaveLength(1);
      expect(boxScores[0]).toBeInstanceOf(BoxScore);
    });

    const req = spectator.expectOne(`${environment.configuration.apiUrl}/box-scores.json`, HttpMethod.GET);
    req.flush(mockDTOs);
  });
});
