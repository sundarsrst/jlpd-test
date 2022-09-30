import ClientError from '../ClientError'

export const getLcm = (numbers: number[]): number => {
  if (numbers.length < 2) {
    throw new ClientError(`Invalid number of arguments: ${numbers.length}`, 400)
  }

  if (numbers.includes(0)) {
    return 0
  }

  const originals = [...numbers]
  const currentStep = numbers
  while (!areAllTheSame(currentStep)) {
    const minimum = Math.min(...currentStep)
    const minIndex = currentStep.indexOf(minimum)

    currentStep[minIndex] = minimum + originals[minIndex]
  }

  return currentStep[0]
}
const areAllTheSame = (numbers: number[]): boolean => [...new Set(numbers)].length == 1

export const getGcd = (numbers: number[]): number => {
  if (numbers.length < 2) {
    throw new ClientError(`Invalid number of arguments: ${numbers.length}`, 400)
  }

  let result = numbers[0]
  numbers.forEach((number) => {
    result = gcd(result, number)
  })

  return result
}
const gcd = (a: number, b: number): number => {
  if (a == 0) return b

  return gcd(b % a, a)
}
