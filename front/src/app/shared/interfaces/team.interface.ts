import { Player } from './player.interface';

export interface Team {
  id: number;
  coach: string;
  year: number;
  players: Player[];
}
