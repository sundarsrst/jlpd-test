import { runComponentTest } from '../testUtils/componentTestUtils'
import request from 'supertest'

it('should correctly serve /cookie', () =>
  runComponentTest(async (server) => {
    const response = await request(server).get('/cookie')
    expect(response.status).toBe(200)
  }))

it('should correctly serve /shinx', () =>
  runComponentTest(async (server) => {
    const response = await request(server).get('/shinx')
    expect(response.status).toBe(200)
  }))
