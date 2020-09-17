type NumStr =  number | string;
type ResConv = "as-number" | "as-text";

function combine(
  input1: NumStr,
  input2: NumStr,
  resultConv: ResConv = "as-text"
) {
  if (typeof input1 === "number" && typeof input2 === "number" || resultConv === 'as-number') {
    return +input1 + +input2;
  }

  return input1.toString() + " " + input2.toString();
}

const combinedAges = combine(23, 28);

console.log(combinedAges);

const combinedNames = combine("22", "22");

console.log(combinedNames);

