function add(a: number, b: number, showResult: boolean, phrase: string) {
  if (showResult) {
    const result = a + b;
    console.log(phrase + result);
  } else {
    return a + b;
  }
}

const num1 = 5;
const num2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(num1, num2, printResult, resultPhrase);
