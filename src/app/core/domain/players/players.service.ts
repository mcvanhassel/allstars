import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppConfiguration } from '../../app-configuration';
import { BoxScore, BoxScoreDTO, Player } from './models';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor(private readonly http: HttpClient, private readonly appConfiguration: AppConfiguration) {}

  getAllStars(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.appConfiguration.apiUrl}/players.json`);
  }

  getBoxScores(): Observable<BoxScore[]> {
    return this.http
      .get<BoxScoreDTO[]>(`${this.appConfiguration.apiUrl}/box-scores.json`)
      .pipe(map(boxScores => boxScores.map(boxScore => new BoxScore(boxScore))));
  }
}
