"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum(number1, number2) {
    return number1 + number2;
}
function printResults(num) {
    console.log("Result: " + num);
}
function addAndHandle(number1, number2, handler) {
    var sum = number1 + number2;
    handler(sum);
}
var combineValues;
combineValues = sum;
printResults(sum(34, 44));
printResults(combineValues(1, 2));
addAndHandle(12, 12, function (result) { return console.log(result); });
