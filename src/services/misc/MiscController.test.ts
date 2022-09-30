import { runComponentTest } from '../testUtils/componentTestUtils'
import request from 'supertest'
const { Response } = jest.requireActual('node-fetch')
import fetch from 'node-fetch'

jest.mock('node-fetch', () => jest.fn())

beforeEach(jest.resetAllMocks)

describe('Joke', () => {
  it('should successfully respond to a valid request', () =>
    runComponentTest(async (server) => {
      ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
        new Response(JSON.stringify({ joke: 'a bad joke' }))
      )
      const response = await request(server).get('/joke')
      expect(response.status).toBe(200)
      expect(response.text).toBe('a bad joke')
    }))
})
