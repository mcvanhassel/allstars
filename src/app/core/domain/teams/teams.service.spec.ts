import { createHttpFactory, HttpMethod, type SpectatorHttp } from '@ngneat/spectator/jest';

import { environment } from '../../../../environments/environment';
import { AppConfiguration } from '../../app-configuration';
import { Conference } from './models/conference';
import { TeamsService } from './teams.service';

import type { Team } from './models/team';

describe('TeamsService', () => {
  let spectator: SpectatorHttp<TeamsService>;
  const createHttp = createHttpFactory({
    service: TeamsService,
    providers: [{ provide: AppConfiguration, useValue: environment.configuration }],
  });

  beforeEach(() => {
    spectator = createHttp();
  });

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });

  it('should get teams', () => {
    const mockTeams: Team[] = [
      { id: 'LAL', name: 'Los Angeles Lakers', conference: Conference.West },
      { id: 'BOS', name: 'Boston Celtics', conference: Conference.East },
    ];

    spectator.service.getTeams().subscribe(teams => {
      expect(teams).toEqual(mockTeams);
    });

    const req = spectator.expectOne(`${environment.configuration.apiUrl}/teams.json`, HttpMethod.GET);
    req.flush(mockTeams);
  });

  it('should get team by id', () => {
    const mockTeams: Team[] = [
      { id: 'LAL', name: 'Los Angeles Lakers', conference: Conference.West },
      { id: 'BOS', name: 'Boston Celtics', conference: Conference.East },
    ];

    spectator.service.getTeamById('LAL').subscribe(team => {
      expect(team).toEqual(mockTeams[0]);
    });

    const req = spectator.expectOne(`${environment.configuration.apiUrl}/teams.json`, HttpMethod.GET);
    req.flush(mockTeams);
  });
});
