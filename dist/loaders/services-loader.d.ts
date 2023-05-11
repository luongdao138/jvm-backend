import { ConfigModule } from '../types';
import { AppContainer } from '../utils';
type Options = {
    configModule: ConfigModule;
    container: AppContainer;
};
export default function ({ configModule, container }: Options): Promise<void>;
export {};
