import { Player } from '../../../core/domain/players';

export interface PlayerWithTeam extends Player {
  teamName: string | undefined;
}
