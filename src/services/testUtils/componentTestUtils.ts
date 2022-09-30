import { Server } from 'http'
import { configureApp } from '../../configureApp'

export const runComponentTest = async (testBody: (server: Server) => Promise<void>) => {
  const server = configureApp()
  try {
    await testBody(server)
  } finally {
    server.close()
  }
}
