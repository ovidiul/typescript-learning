function add(n1: number, n2: number, printResult: boolean, phrase: string) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect input!");
  }

  let sum = n1 + n2;
  if (printResult) {
    console.log(phrase + sum);
  }
  return sum;
}

const number1 = 5;
const number2 = 5.2;
const printResult = true;
const resultPhrase = "Result is: "

const sum = add(number1, number2, printResult, resultPhrase);