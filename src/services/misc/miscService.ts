import ClientError from '../ClientError'
import fetch from 'node-fetch'

interface JokeResponse {
  joke: string
}

export const JOKE_URL = 'https://icanhazdadjoke.com/'

export const getJoke = async (): Promise<string> => {
  const response = await fetch(JOKE_URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  }).catch((reason) => {
    throw new ClientError(`Failed to fetch joke: ${reason}`, 500)
  })

  if (!response.ok) {
    console.log(`${response.status} - ${response.statusText}`)
    throw new ClientError('Failed to fetch joke', 500)
  }

  const body = await response.json() as JokeResponse
  return body.joke
}
