import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AppConfigurationModule } from '../../app-configuration';
import { PlayersService } from './players.service';

describe('PlayersService', () => {
  let service: PlayersService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule, AppConfigurationModule] });
    service = TestBed.inject(PlayersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
