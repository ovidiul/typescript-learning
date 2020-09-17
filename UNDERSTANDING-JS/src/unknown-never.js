"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generateError(message, code) {
    if (code === 500) {
        throw { message: message, errorCode: code };
    }
}
generateError("Error occured", 500);
