import { getConnection } from 'typeorm';

import { PlayerRepository } from '../repositories/player.repository';
import { TeamRepository } from '../repositories/team.repository';
import { PlayerEntity } from '../entities/player.entity';
import { TeamEntity } from '../entities/team.entity';

export class TeamService {
  private playerRepository: PlayerRepository;
  private teamReptr: TeamRepository;

  constructor() {
    this.playerRepository = getConnection().getCustomRepository(PlayerRepository);
    this.teamReptr = getConnection().getCustomRepository(TeamRepository);
  }

  public get = async (year: number): Promise<TeamEntity> => {
    const team = await this.teamReptr.findOne({ where: { year } });

    return team;
  };

  public addPlayerInTeam = async (body: PlayerEntity, year: number): Promise<PlayerEntity> => {
    let team = await this.teamReptr.findOne({ where: { year } });

    if (!team) {
      team = await this.teamReptr.create({ coach: '', year });
    }

    const player = await this.playerRepository.create(body);

    await this.playerRepository.save(player);

    if (team.players) {
      team.players.push(player);
    } else {
      team.players = [player];
    }

    await this.teamReptr.manager.save(team);

    return player;
  };
}
