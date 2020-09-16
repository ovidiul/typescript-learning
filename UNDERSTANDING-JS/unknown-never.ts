export {};

let userInput: unknown;
let userName: string;

userInput = 5;

userName = String(userInput);

function generateError(message: string, code: number): never|void {
  if (code === 500) {
    throw { message: message, errorCode: code };
  }

  return null;
}

generateError("Error occured", 500);
