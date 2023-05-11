import { Express } from 'express';
import { ConfigModule } from '../types';
import { AppContainer } from '../utils';
type ModelOptions = {
    container: AppContainer;
    rootDirectory: string;
    configModule: ConfigModule;
};
interface PluginDetails {
    resolve: string;
    name: string;
    id: string;
    options: Record<string, unknown>;
    version: string;
}
export declare function registerPluginModels({ container, rootDirectory, configModule }: ModelOptions): Promise<void>;
export declare function registerRepositories(pluginDetail: PluginDetails, container: AppContainer): Promise<void>;
export declare function registerServices(pluginDetail: PluginDetails, container: AppContainer, configModule: ConfigModule): Promise<void>;
export declare function registerApis(pluginDetail: PluginDetails, app: Express, rootDirectory: string, container: AppContainer, activityId: string, configModule: ConfigModule): Promise<Express>;
export declare function registerModels(pluginDetail: PluginDetails, container: AppContainer): Promise<void>;
type Options = {
    rootDirectory: string;
    container: AppContainer;
    configModule: ConfigModule;
    app: Express;
    activityId: string;
};
export default function ({ configModule, rootDirectory, app, container, activityId }: Options): Promise<void>;
export {};
