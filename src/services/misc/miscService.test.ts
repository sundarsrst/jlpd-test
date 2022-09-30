import { getJoke } from './miscService'
import ClientError from '../ClientError'
const { Response } = jest.requireActual('node-fetch')
import fetch from 'node-fetch'

jest.mock('node-fetch', () => jest.fn())

beforeEach(jest.resetAllMocks)

describe('getJoke', () => {
  it('should return the joke if request is successful', async () => {
    ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(
      new Response(JSON.stringify({ joke: 'a bad joke' }))
    )

    const result = await getJoke()
    expect(result).toBe('a bad joke')
  })

  it('should throw a client error if the request fails', async () => {
    ;(fetch as jest.MockedFunction<typeof fetch>).mockResolvedValueOnce(new Response('', { status: 500 }))
    await expect(getJoke()).rejects.toThrow(ClientError)
  })

  it('should throw a client error if the request throws an error', async () => {
    ;(fetch as jest.MockedFunction<typeof fetch>).mockRejectedValueOnce(new Error('boom'))
    await expect(getJoke()).rejects.toThrow(ClientError)
  })
})
