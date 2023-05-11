import { ZodError } from 'zod';
export declare const AppErrorTypeDict: {
    NOT_FOUND: string;
    UNAUTHORIZED: string;
    UNAUTHENTICATED: string;
    BAD_REQUEST: string;
    ZOD_ERROR: string;
    DUPLICATE_ERROR: string;
    SERVER_ERROR: string;
};
type AppErrorType = string;
type AppErrorCode = string | number;
export declare const AppErrorDict: {
    [key: string]: AppErrorCode;
};
export declare class AppError extends Error {
    type: AppErrorType;
    code: AppErrorCode;
    timestamp: string;
    static Types: {
        NOT_FOUND: string;
        UNAUTHORIZED: string;
        UNAUTHENTICATED: string;
        BAD_REQUEST: string;
        ZOD_ERROR: string;
        DUPLICATE_ERROR: string;
        SERVER_ERROR: string;
    };
    constructor(type: AppErrorType, message: string);
}
export type GlobalError = AppError | ZodError | Error;
export {};
