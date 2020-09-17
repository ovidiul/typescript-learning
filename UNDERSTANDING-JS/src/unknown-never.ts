export {};

function generateError(message: string, code: number): never|void {
  if (code === 500) {
    throw { message: message, errorCode: code };
  }
}

generateError("Error occured", 500);
