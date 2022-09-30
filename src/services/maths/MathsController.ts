import { Controller } from '../AbstractController'
import { Express, Request, Response } from 'express'
import { getGcd, getLcm } from './mathsService'
import { GetGcdRequest, GetLcmRequest } from './Requests'

export class MathsController implements Controller {
  installRoutes(app: Express): void {
    app.post('/lcm', this.handleLcmRequest)
    app.post('/gcd', this.handleGcdRequest)
  }

  private handleLcmRequest = (req: Request, res: Response) => {
    const requestBody = req.body as GetLcmRequest
    const result = getLcm(requestBody.numbers)
    res.send(result.toString())
  }

  private handleGcdRequest = (req: Request, res: Response) => {
    const requestBody = req.body as GetGcdRequest
    const result = getGcd(requestBody.numbers)
    res.send(result.toString())
  }
}
