export enum Operator {
  Add = '+',
  Multiply = 'x',
  Subtract = '-',
  Divide = '/'
}

export const operatorFunctions = new Map([
  [Operator.Add, (a: number, b: number) => a + b],
  [Operator.Subtract, (a: number, b: number) => a - b],
  [Operator.Multiply, (a: number, b: number) => a * b],
  [Operator.Divide, (a: number, b: number) => a / b]
])

export enum OperatorIndex {
  Add,
  Multiply,
  Subtract,
  Divide
}

export function getRandomIntInclusive(min: number, max: number) {
  const minCeiled = Math.ceil(min)
  const maxFloored = Math.floor(max)
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled) // The maximum is inclusive and the minimum is inclusive
}

export function getRandomArrayMember<T>(array?: T[]): T | null | undefined {
  if (!array) {
    return array
  }
  return array[Math.floor(Math.random() * array.length)]
}

// from https://www.geeksforgeeks.org/javascript/how-to-select-a-random-element-from-array-in-javascript/
export function knuthShuffle<T>(array: T[]): T[] {
  const shuffledArray = structuredClone(array)
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }

  return shuffledArray
}

export function isNotNullish<T>(arg: T): arg is NonNullable<T> {
  return arg != null;
}

export function isNullish<T>(arg: T) {
  return arg == null;
}
