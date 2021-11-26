import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Player, Team } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor(private readonly httpCLient: HttpClient) {}

  public getOneByYear(year: string): Observable<Team> {
    return this.httpCLient.get<Team>(`${environment.baseUrl}/team/${year}`);
  }

  public addPlayer(year: string, body: Player): Observable<Player> {
    return this.httpCLient.post<Player>(`${environment.baseUrl}/team/${year}`, body);
  }
}
