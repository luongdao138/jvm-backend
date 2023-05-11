import { Request, RequestHandler, Response } from 'express';
type handler = (req: Request, res: Response) => Promise<void>;
export declare const wrapHandler: (fn: handler) => RequestHandler;
export {};
