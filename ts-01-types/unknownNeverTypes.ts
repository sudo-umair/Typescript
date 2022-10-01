//unknown type
let userInput: unknown;

userInput = 5;
userInput = "Max";

// not possible to assign unknown to string
// let test:string = userInput;

if (typeof userInput === "string") {
  let test: string = userInput;
}

//never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
