import * as fs from 'fs'

export const getAsciiArtFile = (name: string): string => {
  return fs.readFileSync(`src/public/${name}.html`, { encoding: 'ascii' })
}
