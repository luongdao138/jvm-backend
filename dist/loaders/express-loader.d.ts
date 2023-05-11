import express, { Express } from 'express';
import { ConfigModule } from '../types/globals';
type Options = {
    app: Express;
    configModule?: ConfigModule;
};
export default function ({ app, configModule }: Options): Promise<express.Express>;
export {};
