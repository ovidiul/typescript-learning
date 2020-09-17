"use strict";
function combine(input1, input2, resultConv) {
    if (resultConv === void 0) { resultConv = "as-text"; }
    if (typeof input1 === "number" && typeof input2 === "number" || resultConv === 'as-number') {
        return +input1 + +input2;
    }
    return input1.toString() + " " + input2.toString();
}
var combinedAges = combine(23, 28);
console.log(combinedAges);
var combinedNames = combine("22", "22");
console.log(combinedNames);
