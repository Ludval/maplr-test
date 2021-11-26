import { EntityRepository, getConnection, getRepository, Repository } from 'typeorm';

import { PlayerEntity } from '../entities/player.entity';

@EntityRepository(PlayerEntity)
export class PlayerRepository extends Repository<PlayerEntity> {
  // private repository: Repository<Player>;
  // constructor() {
  //   super();
  //   this.repository = getRepository(Player);
  // }
  // getOne(playerId: number): Promise<Player> {
  //   return this.repository.findOne(playerId);
  // }
  // async post(body: Player): Promise<Player> {
  //   const player = await this.repository.create(body);
  //   return this.repository.save(player);
  // }
  // async put(playerId: number, body: Player): Promise<Player> {
  //   const player = await this.getOne(playerId);
  //   this.repository.merge(player, body);
  //   return this.repository.save(player);
  // }
}
