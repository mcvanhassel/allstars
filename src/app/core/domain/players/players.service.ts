import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppConfiguration } from '../../app-configuration';
import { Player } from './models';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor(private readonly http: HttpClient, private readonly appConfiguration: AppConfiguration) {}

  getAllStars(): Observable<Player[]> {
    return this.http.get<Player[]>(`${this.appConfiguration.apiUrl}/players.json`);
  }

  getPlayerById(id: string): Observable<Player | undefined> {
    return this.getAllStars().pipe(map(players => players.find(player => player.id === id)));
  }
}
