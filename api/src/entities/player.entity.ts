import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('players')
export class PlayerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  position: string;

  @Column({ name: 'is_capitain' })
  isCaptain: boolean;
}
