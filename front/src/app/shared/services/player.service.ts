import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

import { Player } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  constructor(private readonly httpCLient: HttpClient) {}

  public setCaptain(playerId: number): Observable<Player> {
    return this.httpCLient.put<Player>(`${environment.baseUrl}/player/${playerId}/captain`, null);
  }
}
