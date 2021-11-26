import { POSITION } from '../enums';

export interface Player {
  id: number;
  number: number;
  name: string;
  lastname: string;
  position: POSITION;
  isCaptain: boolean;
}
