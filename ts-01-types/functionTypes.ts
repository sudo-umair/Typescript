function add(a: number, b: number): number {
  return a + b;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

//function pointer
let functionPointer: (a: number, b: number) => number;
functionPointer = add;
printResult(functionPointer(5, 33));

//with callback
function addAndHandle(a: number, b: number, cb: (num: number) => void) {
  const result = a + b;
  cb(result);
}
addAndHandle(10, 20, (result) => {
  console.log(result);
});
