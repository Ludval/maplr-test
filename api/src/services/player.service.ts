import { getConnection } from 'typeorm';

import { PlayerRepository } from '../repositories/player.repository';
import { PlayerEntity } from '../entities/player.entity';

export class PlayerService {
  private playerRepository: PlayerRepository;

  constructor() {
    this.playerRepository = getConnection().getCustomRepository(PlayerRepository);
  }

  public put = async (playerId: number): Promise<PlayerEntity> => {
    const currentCaptain = await this.playerRepository.findOne({ where: { isCaptain: true } });

    if (currentCaptain) {
      this.playerRepository.save({ ...currentCaptain, isCaptain: false });
    }

    const player = await this.playerRepository.findOne(playerId);

    player.isCaptain = true;

    await this.playerRepository.save(player);

    return player;
  };
}
