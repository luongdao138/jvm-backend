import { ConfigModule } from '../types';
import { AppContainer } from '../utils';
export default function (container: AppContainer, config: ConfigModule): import("express-serve-static-core").Router;
