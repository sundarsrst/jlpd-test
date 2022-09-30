import { Controller } from '../AbstractController'
import { Express, Request, Response } from 'express'
import { getJoke } from './miscService'

export class MiscController implements Controller {
  installRoutes(app: Express): void {
    app.get('/joke', this.handleJokeRequest)
  }

  private handleJokeRequest = async (req: Request, res: Response) => {
    const result = await getJoke()
    res.send(result)
  }
}
