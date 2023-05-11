interface ConfigResult<T> {
    configModule: T;
    error?: any;
    configFilePath: string;
}
declare function getConfigFile<TConfig = unknown>(rootDir: string, fileName: string): ConfigResult<TConfig>;
export default getConfigFile;
