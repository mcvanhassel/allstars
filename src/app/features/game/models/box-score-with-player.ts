import type { BoxScore } from '../../../core/domain/players';

export interface BoxScoreWithPlayer extends BoxScore {
  player: string;
  starter: boolean;
  team: string;
}
