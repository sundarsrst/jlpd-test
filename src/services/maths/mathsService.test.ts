import { getGcd, getLcm } from './mathsService'
import ClientError from '../ClientError'

describe('lcm', () => {
  it('should throw a client error if less than two numbers are passed', () => {
    expect(() => getLcm([])).toThrow(ClientError)
    expect(() => getLcm([5])).toThrow(ClientError)
  })

  it('should correctly compute the LCM of two numbers', () => {
    expect(getLcm([5, 7])).toBe(35)
    expect(getLcm([6, 8])).toBe(24)
    expect(getLcm([13, 13])).toBe(13)
  })

  it('should correctly compute the LCM of more than two numbers', () => {
    expect(getLcm([3, 4, 6])).toBe(12)
  })

  it('should cope with zero being one of the supplied arguments', () => {
    expect(getLcm([50, 5, 0])).toBe(0)
  })
})

describe('gcd', () => {
  it('should throw a client error if less than two numbers are passed', () => {
    expect(() => getGcd([])).toThrow(ClientError)
    expect(() => getGcd([5])).toThrow(ClientError)
  })

  it('should correctly compute the GCD of two numbers', () => {
    expect(getGcd([16, 8])).toBe(8)
    expect(getGcd([343, 98])).toBe(49)
    expect(getGcd([7, 13])).toBe(1)
  })

  it('should correctly compute the GCD of more than two numbers', () => {
    expect(getGcd([5, 25, 125])).toBe(5)
    expect(getGcd([64, 24, 4])).toBe(4)
  })

  it('should cope with zero being one of the supplied arguments', () => {
    expect(getGcd([25, 0])).toBe(25)
    expect(getGcd([0, 0])).toBe(0)
  })
})
