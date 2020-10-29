import { Component, OnInit } from '@angular/core';
import { RankService } from '../games/rank.service';
import { Score } from '../games/score.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  spaceInvadersScores: Score[];
  tetrisScores: Score[];
  head: string[] = ['name', 'score'];

  constructor(private rankService: RankService) {}

  ngOnInit() {
    this.rankService
      .getSpaceInvadersScore()
      .subscribe((scores) => (this.spaceInvadersScores = scores));

    this.rankService
      .getTetrisScore()
      .subscribe((scores) => (this.tetrisScores = scores));
  }
}
