import { Server } from 'http'
import express, { Express } from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import { MathsController } from './services/maths/MathsController'
import { MiscController } from './services/misc/MiscController'
import { RootController } from './services/root/RootController'
import { AsciiController } from './services/ascii-art/AsciiController'

const PORT = 3000

export const configureApp = (): Server => {
  const app: Express = express()
  app.use(helmet())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  new AsciiController().installRoutes(app)
  new MathsController().installRoutes(app)
  new MiscController().installRoutes(app)
  new RootController().installRoutes(app)

  return app.listen(PORT, () => console.log(`Running on ${PORT} ⚡`))
}
