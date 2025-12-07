import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { MaxPipe } from '../../../../core/max/max.pipe';
import { SumPipe } from '../../../../core/sum/sum.pipe';
import { PlayerStatPipe } from '../player-stat/player-stat.pipe';

import type { BoxScoreWithPlayer } from '../../models';

@Component({
  selector: 'allstars-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  imports: [SumPipe, MaxPipe, PlayerStatPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameComponent {
  easternBoxScores = input<BoxScoreWithPlayer[] | null>();
  westernBoxScores = input<BoxScoreWithPlayer[] | null>();
}
