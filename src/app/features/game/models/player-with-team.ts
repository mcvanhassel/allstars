import type { Player } from '../../../core/domain/players';
import type { Team } from '../../../core/domain/teams';

export interface PlayerWithTeam extends Player {
  team: Team | undefined;
}
