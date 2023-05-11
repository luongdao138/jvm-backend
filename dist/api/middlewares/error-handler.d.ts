import { Request, Response } from 'express';
import { GlobalError } from '../../common';
export default function (error: GlobalError, req: Request, res: Response, next: any): Promise<Response<any, Record<string, any>>>;
