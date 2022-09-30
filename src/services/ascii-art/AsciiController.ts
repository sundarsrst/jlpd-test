import { Controller } from '../AbstractController'
import { Express, Request, Response } from 'express'
import { getAsciiArtFile } from './asciiService'

export class AsciiController implements Controller {
  installRoutes(app: Express): void {
    app.get('/cookie', this.handleCookieRequest)
    app.get('/shinx', this.handleShinxRequest)
  }

  private handleCookieRequest = (req: Request, res: Response) => {
    const response = getAsciiArtFile('cookie-monster')
    res.send(response)
  }

  private handleShinxRequest = (req: Request, res: Response) => {
    const response = getAsciiArtFile('shinx')
    res.send(response)
  }
}
