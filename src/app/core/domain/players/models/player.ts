import { Position } from './position';

export interface Player {
  id: string;
  name: string;
  position: Position;
  teamId: string;
  starter: boolean;
  selections: number;
  votes?: number;
}
