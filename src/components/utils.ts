export enum Operator {
    Add = '+',
    Subtract = '-',
    Multiply = 'x',
    Divide = '/',
}

export const operatorFunctions = new Map([
    [Operator.Add, (a: number, b: number) => a + b],
    [Operator.Subtract, (a: number, b: number) => a - b],
    [Operator.Multiply, (a: number, b: number) => a * b],
    [Operator.Divide, (a: number, b: number) => a / b]
])