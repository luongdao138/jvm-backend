import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigModule } from '../types';
import { AppContainer } from '../utils';
type Options = {
    container: AppContainer;
    configModule: ConfigModule;
    customOptions?: {
        migrations: DataSourceOptions['migrations'];
        logging: DataSourceOptions['logging'];
    };
};
export declare let dataSource: DataSource;
export default function ({ container, configModule, customOptions }: Options): Promise<DataSource>;
export {};
