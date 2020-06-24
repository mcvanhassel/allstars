import { Pipe, PipeTransform } from '@angular/core';

import { BoxScoreWithPlayer } from '../../models';

@Pipe({ name: 'playerStat' })
export class PlayerStatPipe implements PipeTransform {
  transform(boxScores: BoxScoreWithPlayer[], prop: keyof BoxScoreWithPlayer): string {
    return boxScores.map(boxScore => `${boxScore.player} (${boxScore[prop]})`).join('\r\n');
  }
}
