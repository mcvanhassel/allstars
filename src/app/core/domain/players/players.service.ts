import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { BoxScore, type BoxScoreDTO, type Player } from './models';
import { AppConfiguration } from '../../app-configuration';

import type { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private readonly http = inject(HttpClient);
  private readonly appConfiguration = inject(AppConfiguration);

  getAllStars(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.appConfiguration.apiUrl}/players.json`);
  }

  getBoxScores(): Observable<BoxScore[]> {
    return this.http
      .get<BoxScoreDTO[]>(`${this.appConfiguration.apiUrl}/box-scores.json`)
      .pipe(map(boxScores => boxScores.map(boxScore => new BoxScore(boxScore))));
  }
}
