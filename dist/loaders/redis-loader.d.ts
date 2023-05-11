import { ConfigModule, Logger } from '../types';
import { AppContainer } from '../utils';
type Options = {
    container: AppContainer;
    logger: Logger;
    configModule: ConfigModule;
};
export default function ({ container, configModule, logger }: Options): Promise<void>;
export {};
