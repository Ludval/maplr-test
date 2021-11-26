import { Request, Response, Router } from 'express';

import { TeamService } from '../services/team.service';

export class TeamController {
  public router: Router;

  private teamSvc: TeamService;

  constructor() {
    this.router = Router();

    this.teamSvc = new TeamService(); // Create a nex instance of TeamService
    this.routes();
  }

  public get = async (req: Request, res: Response) => {
    const team = await this.teamSvc.get(Number(req.params.year)); // Execute the method of service

    res.status(200).send(team);
  };

  public create = async (req: Request, res: Response) => {
    const player = await this.teamSvc.addPlayerInTeam(req.body, Number(req.params.year)); // Execute the method of service

    res.status(201).send(player);
  };

  /**
   * Configure the routes of controller
   */
  public routes(): void {
    this.router.get('/:year', this.get);
    this.router.post('/:year', this.create);
  }
}
