import { Controller } from '../AbstractController'
import { Express, Request, Response } from 'express'

export class RootController implements Controller {
  installRoutes(app: Express): void {
    app.get('/', this.handleRootRequest)
  }

  private handleRootRequest = (req: Request, res: Response) => {
    res.send("Welcome to the EE Technical Task - you're up and running!")
  }
}
