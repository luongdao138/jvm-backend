import { EntitySchema } from 'typeorm';
import { ClassConstructor } from '../types';
import { AppContainer } from '../utils';
type Options = {
    container: AppContainer;
    isTest?: boolean;
};
type LoadedModule = ClassConstructor<unknown> | EntitySchema;
export default function ({ container }: Options, config?: {
    register: boolean;
}): Promise<LoadedModule[]>;
export {};
