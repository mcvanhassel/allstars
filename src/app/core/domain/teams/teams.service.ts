import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { of, type Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { AppConfiguration } from '../../app-configuration';

import type { Team } from './models';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  private readonly http = inject(HttpClient);
  private readonly appConfiguration = inject(AppConfiguration);

  private readonly teams$ = this.http
    .get<Team[]>(`${this.appConfiguration.apiUrl}/teams.json`)
    .pipe(shareReplay({ bufferSize: 1, refCount: false }));

  private readonly teamsById$ = new Map<string, Observable<Team | undefined>>();

  getTeams(): Observable<Team[]> {
    return this.teams$;
  }

  getTeamById(id: string): Observable<Team | undefined> {
    if (!this.teamsById$.has(id)) {
      const team$ = this.teams$.pipe(map(teams => teams.find(team => team.id === id)));
      this.teamsById$.set(id, team$);
    }

    return this.teamsById$.get(id) ?? of(undefined);
  }
}
