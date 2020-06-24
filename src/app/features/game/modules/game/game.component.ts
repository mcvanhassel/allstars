import { Component, Input } from '@angular/core';

import { BoxScoreWithPlayer } from '../../models';

@Component({
  selector: 'allstars-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  @Input() easternBoxScores: BoxScoreWithPlayer[] | undefined | null;
  @Input() westernBoxScores: BoxScoreWithPlayer[] | undefined | null;
}
