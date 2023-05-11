import { Express } from 'express';
import { AppContainer } from '../utils';
type Options = {
    container: AppContainer;
    app: Express;
};
export default function ({ app, container }: Options): Promise<void>;
export {};
