import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AppConfiguration } from '../../app-configuration';
import { Team } from './models';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private readonly http: HttpClient, private readonly appConfiguration: AppConfiguration) {}

  private readonly teams$ = new Map<string, Observable<Team | undefined>>();

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>(`${this.appConfiguration.apiUrl}/teams.json`);
  }

  getTeamById(id: string): Observable<Team | undefined> {
    if (!this.teams$.has(id)) {
      const team$ = this.getTeams().pipe(
        map(teams => teams.find(team => team.id === id)),
        shareReplay({ refCount: true })
      );
      this.teams$.set(id, team$);
    }

    return this.teams$.get(id) || of(undefined);
  }
}
