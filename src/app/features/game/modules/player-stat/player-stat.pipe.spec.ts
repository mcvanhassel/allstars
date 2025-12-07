import { PlayerStatPipe } from './player-stat.pipe';

import type { BoxScoreWithPlayer } from '../../models';

describe('PlayerStatPipe', () => {
  let pipe: PlayerStatPipe;

  beforeEach(() => {
    pipe = new PlayerStatPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format player stats', () => {
    const boxScores: BoxScoreWithPlayer[] = [
      { player: 'Player A', points: 20 } as BoxScoreWithPlayer,
      { player: 'Player B', points: 15 } as BoxScoreWithPlayer,
    ];

    const result = pipe.transform(boxScores, 'points');
    expect(result).toBe('Player A (20)\r\nPlayer B (15)');
  });

  it('should handle empty array', () => {
    const result = pipe.transform([], 'points');
    expect(result).toBe('');
  });
});
