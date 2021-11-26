import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { PlayerEntity } from './player.entity';

@Entity('teams')
export class TeamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  coach: string;

  @Column()
  year: number;

  @ManyToMany(() => PlayerEntity, { eager: true })
  @JoinTable({
    name: 'player_team',
    joinColumn: {
      name: 'team_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'player_id',
      referencedColumnName: 'id',
    },
  })
  players: PlayerEntity[];
}
