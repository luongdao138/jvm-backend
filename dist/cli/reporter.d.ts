import winston from 'winston';
export declare class Reporter {
    loggerInstance_: winston.Logger;
    activities_: any[];
    ora_: any;
    constructor({ logger, activityLogger }: {
        logger: any;
        activityLogger: any;
    });
    shouldLog: (level: any) => boolean;
    setLogLevel: (level: any) => void;
    unsetLogLevel: () => void;
    activity: (message: string, config?: {}) => string;
    progress: (activityId: string, message: string) => void;
    error: (messageOrError: any, error?: any) => void;
    failure: (activityId: string, message: string) => any;
    success: (activityId: string, message: string) => any;
    debug: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    log: (level: string, message: string, callback: winston.LogCallback) => void;
}
declare const logger: Reporter;
export default logger;
