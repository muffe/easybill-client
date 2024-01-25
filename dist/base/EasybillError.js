"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasybillError = void 0;
class EasybillError extends Error {
    constructor(message, statusCode, displayName, axiosError) {
        super(message);
        this.statusCode = statusCode;
        this.displayName = displayName;
        this.axiosError = axiosError;
        Error.captureStackTrace(this);
    }
}
exports.EasybillError = EasybillError;
