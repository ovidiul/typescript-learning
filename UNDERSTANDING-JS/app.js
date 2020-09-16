function add(n1, n2, printResult, phrase) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new Error("Incorrect input!");
    }
    var sum = n1 + n2;
    if (printResult) {
        console.log(phrase + sum);
    }
    return sum;
}
var number1 = 5;
var number2 = 5.2;
var printResult = true;
var resultPhrase = "Result is: ";
var n;
n = "e";
var sum = add(number1, number2, printResult, resultPhrase);
