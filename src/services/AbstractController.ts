import { Express } from 'express'

export interface Controller {
  installRoutes(app: Express): void
}
