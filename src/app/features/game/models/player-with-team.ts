import { Player } from '../../../core/domain/players';
import { Team } from '../../../core/domain/teams';

export interface PlayerWithTeam extends Player {
  team: Team | undefined;
}
