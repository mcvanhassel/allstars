import { type PipeTransform, Pipe } from '@angular/core';

import type { BoxScoreWithPlayer } from '../../models';

@Pipe({
  name: 'playerStat',
})
export class PlayerStatPipe implements PipeTransform {
  transform(boxScores: BoxScoreWithPlayer[], prop: keyof BoxScoreWithPlayer): string {
    return boxScores.map(boxScore => `${boxScore.player} (${boxScore[prop]})`).join('\r\n');
  }
}
