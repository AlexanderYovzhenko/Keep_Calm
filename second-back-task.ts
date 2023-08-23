class SecondBackTask {
  static getResult(base: number, exponent: number): number {
    const lastDigitCycle: number[][] = [
      [0],
      [1],
      [2, 4, 8, 6],
      [3, 9, 7, 1],
      [4, 6],
      [5],
      [6],
      [7, 9, 3, 1],
      [8, 4, 2, 6],
      [9, 1]
    ];
    
    const lastDigit: number = base % 10;
    const cycle: number[] = lastDigitCycle[lastDigit];
    const cycleLength: number = cycle.length;
    const currentExponent: number = (exponent % cycleLength) || cycleLength;

    const result: number = Math.pow(lastDigit, currentExponent);
    const lastDigitResult: number = result % 10;
    
    return lastDigitResult;
  }
}

const a: number = 7;
const b: number = 3;
console.log(SecondBackTask.getResult(a, b)); // Output: 3

const x: number = 5;
const y: number = 123456789;
console.log(SecondBackTask.getResult(x, y)); // Output: 5
