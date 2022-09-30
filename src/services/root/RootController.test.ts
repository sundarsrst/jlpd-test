import { runComponentTest } from '../testUtils/componentTestUtils'
import request from 'supertest'

it('should correctly serve /', () =>
  runComponentTest(async (server) => {
    const response = await request(server).get('/')
    expect(response.status).toBe(200)
    expect(response.text).toBe("Welcome to the EE Technical Task - you're up and running!")
  }))
