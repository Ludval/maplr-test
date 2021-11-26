import { createConnection } from 'typeorm';
const swaggerDocument = require('../swagger.json');
import swaggerUi = require('swagger-ui-express');
import bodyParser = require('body-parser');
import * as express from 'express';

import { PlayerController } from './controllers/player.controller';
import { TeamController } from './controllers/team.controller';

class Server {
  private app: express.Application;
  private playerCtrl: PlayerController;
  private teamCtrl: TeamController;

  constructor() {
    this.app = express(); // init the application

    this.configuration();
  }

  /**
   * Method to configure the server,
   * If we didn't configure the port into the environment
   * variables it takes the default port 8080
   */
  public async configuration(): Promise<void> {
    await createConnection({
      type: 'mysql',
      host: process.env.HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['build/entities/**/*.js'],
      logging: false,
      synchronize: false,
    });

    // parse application/x-www-form-urlencoded
    this.app.use(bodyParser.urlencoded({ extended: false }));

    // parse application/json
    this.app.use(bodyParser.json());

    this.app.use((req: express.Request, res: express.Response, next) => {
      res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      res.header('Access-Control-Allow-Methods', '*');

      next();
    });

    // set url application for swagger
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

    this.playerCtrl = new PlayerController();
    this.teamCtrl = new TeamController();

    this.routes();
  }

  /**
   * Method to configure the routes
   */
  public async routes(): Promise<void> {
    this.app.use('/api/player', this.playerCtrl.router); // Configure the new routes of the controller Player
    this.app.use('/api/team', this.teamCtrl.router); // Configure the new routes of the controller Player
  }

  /**
   * Method to start the server
   */
  public start(): void {
    this.app.listen(process.env.SERVER_PORT || 8080, () => console.log(`Server is listening ${process.env.SERVER_PORT || 8080} port.`));
  }
}

const server = new Server(); // Create server instance

server.start(); // Execute the server
