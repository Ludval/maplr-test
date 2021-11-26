import { Request, Response, Router } from 'express';

import { PlayerService } from '../services/player.service';

export class PlayerController {
  public router: Router;

  private playerSvc: PlayerService;

  constructor() {
    this.router = Router();

    this.playerSvc = new PlayerService(); // Create a nex instance of PlayerService
    this.routes();
  }

  public put = async (req: Request, res: Response) => {
    const player = await this.playerSvc.put(Number(req.params.id));

    res.status(200).send(player); // Execute the method of service
  };

  /**
   * Configure the routes of controller
   */
  public routes(): void {
    this.router.put('/:id/captain', this.put);
  }
}
