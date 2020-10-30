import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from './score.model';
import { SCORE_API } from '../app.api';

@Injectable({
  providedIn: 'root',
})
export class RankService {
  TETRIS_SCORE = '/tetrisScore';
  SPACE_INVADERS_SCORE = '/spaceInvadersScore';

  constructor(private httpClient: HttpClient) {}

  getTetrisScore(): Observable<Score[]> {
    return this.httpClient.get<Score[]>(SCORE_API + this.TETRIS_SCORE);
  }

  getSpaceInvadersScore(): Observable<Score[]> {
    return this.httpClient.get<Score[]>(SCORE_API + this.SPACE_INVADERS_SCORE);
  }

  persistTetrisScore(score: Score): Observable<any> {
    return this.httpClient.post<Score>(SCORE_API + this.TETRIS_SCORE, {
      score,
    });
  }

  persistSpaceInvadersScore(score: Score): Observable<any> {
    return this.httpClient.post<Score>(SCORE_API + this.SPACE_INVADERS_SCORE, {
      score,
    });
  }
}
