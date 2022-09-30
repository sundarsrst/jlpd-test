import request from 'supertest'
import { runComponentTest } from '../testUtils/componentTestUtils'

describe('LCM', () => {
  it('should successfully respond to a valid request', () =>
    runComponentTest(async (server) => {
      const response = await request(server)
        .post('/lcm')
        .send({ numbers: [5, 13] })
      expect(response.status).toBe(200)
      expect(response.text).toBe('65')
    }))

  it('should respond with Bad Request if insufficient arguments are supplied', () =>
    runComponentTest(async (server) => {
      const response = await request(server)
        .post('/lcm')
        .send({ numbers: [5] })
      expect(response.status).toBe(400)
    }))
})

describe('GCD', () => {
  it('should successfully respond to a valid request', () =>
    runComponentTest(async (server) => {
      const response = await request(server)
        .post('/gcd')
        .send({ numbers: [70, 28] })
      expect(response.status).toBe(200)
      expect(response.text).toBe('14')
    }))

  it('should respond with Bad Request if insufficient arguments are supplied', () =>
    runComponentTest(async (server) => {
      const response = await request(server)
        .post('/gcd')
        .send({ numbers: [5] })
      expect(response.status).toBe(400)
    }))
})
