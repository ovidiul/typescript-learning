export {};

function sum(number1: number, number2: number): number {
  return number1 + number2;
}

function printResults(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(number1: number, number2: number, handler: (num: number) => void) :void {
    const sum = number1 +  number2
    handler(sum)
}

let combineValues: (a: number, b: number) => number;

combineValues = sum;

printResults(sum(34, 44));

printResults(combineValues(1, 2));

addAndHandle(12, 12, (result) => console.log(result))
