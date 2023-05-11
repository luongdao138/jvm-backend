import 'reflect-metadata';
import { LoaderConfig, LoaderResult } from '../types/globals';
declare const appLoader: ({ expressApp, directory }: LoaderConfig) => Promise<LoaderResult>;
export default appLoader;
