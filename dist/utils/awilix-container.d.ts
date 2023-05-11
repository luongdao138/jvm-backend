import { AwilixContainer } from 'awilix';
export type AppContainer = AwilixContainer & {
    registerAdd: <T>(name: string, registration: T) => AppContainer;
    createScope: () => AppContainer;
};
export declare function createAppContainer(...args: any[]): AppContainer;
