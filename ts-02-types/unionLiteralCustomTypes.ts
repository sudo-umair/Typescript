type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";
//custom types also known as aliases

function combine(
  a: Combinable,
  b: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result: Combinable;
  result =
    typeof a === "number" && typeof b === "number"
      ? a + b
      : a.toString() + b.toString();

  resultConversion === "as-number" ? +result : result.toString();
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Umair", "Ali", "as-text");
console.log(combinedNames);
