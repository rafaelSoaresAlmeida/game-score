import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from './score.model';

@Injectable({
  providedIn: 'root',
})
export class RankService {
  constructor(private httpClient: HttpClient) {}

  getTetrisScore(): Observable<Score[]> {
    return this.httpClient.get<Score[]>('https://localhost:3001/tetrisScore');
  }

  getSpaceInvadersScore(): Observable<Score[]> {
    return this.httpClient.get<Score[]>(
      'https://localhost:3001/spaceInvadersScore'
    );
  }
}
