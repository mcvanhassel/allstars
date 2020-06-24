import { BoxScoreDTO } from './box-score-dto';

const pointsPerFreeThrow = 1;
const pointsPerFieldGoal = 2;
const pointsPerThreePointer = 1;

export class BoxScore {
  readonly playerId: string | undefined;
  readonly minutes: number;
  readonly offensiveRebounds: number;
  readonly defensiveRebounds: number;
  readonly assists: number;
  readonly personalFouls: number;
  readonly steals: number;
  readonly turnOvers: number;
  readonly blocks: number;
  readonly fieldGoalsMade: number;
  readonly fieldGoalsAttempted: number;
  readonly threePointersMade: number;
  readonly threePointersAttempted: number;
  readonly freeThrowsMade: number;
  readonly freeThrowsAttempted: number;

  readonly totalRebounds: number | undefined;
  readonly fieldGoalsPercentage: number | undefined;
  readonly threePointersPercentage: number | undefined;
  readonly freeThrowsPercentage: number | undefined;
  readonly points: number | undefined;

  constructor(private readonly dto?: BoxScoreDTO) {
    this.playerId = this.dto?.playerId;
    this.minutes = this.dto?.min ?? 0;
    this.offensiveRebounds = this.dto?.oreb ?? 0;
    this.defensiveRebounds = this.dto?.dreb ?? 0;
    this.assists = this.dto?.ast ?? 0;
    this.personalFouls = this.dto?.pf ?? 0;
    this.steals = this.dto?.stl ?? 0;
    this.turnOvers = this.dto?.tov ?? 0;
    this.blocks = this.dto?.blk ?? 0;
    this.fieldGoalsMade = this.dto?.fgm ?? 0;
    this.fieldGoalsAttempted = this.dto?.fga ?? 0;
    this.threePointersMade = this.dto?.tpm ?? 0;
    this.threePointersAttempted = this.dto?.tpa ?? 0;
    this.freeThrowsMade = this.dto?.ftm ?? 0;
    this.freeThrowsAttempted = this.dto?.fta ?? 0;

    this.totalRebounds = this.defensiveRebounds + this.offensiveRebounds;

    this.fieldGoalsPercentage = this.fieldGoalsMade / this.fieldGoalsAttempted;
    this.threePointersPercentage = this.threePointersMade / this.threePointersAttempted;
    this.freeThrowsPercentage = this.freeThrowsMade / this.freeThrowsAttempted;

    const fieldGoalPoints = this.fieldGoalsMade * pointsPerFieldGoal;
    const threePointerPoints = this.threePointersMade * pointsPerThreePointer;
    const freeThrowPoints = this.freeThrowsMade * pointsPerFreeThrow;
    this.points = fieldGoalPoints + threePointerPoints + freeThrowPoints;
  }
}
