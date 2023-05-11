"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_path_1 = __importDefault(require("node:path"));
function getConfigFile(rootDir, fileName) {
    var configPath = node_path_1.default.join(rootDir, fileName);
    var configFilePath = '';
    var configModule;
    var err;
    try {
        configFilePath = require.resolve(configPath);
        configModule = require(configFilePath);
    }
    catch (error) {
        err = error;
    }
    if (configModule && typeof configModule.default === 'object') {
        configModule = configModule.default;
    }
    return {
        error: err,
        configModule: configModule,
        configFilePath: configFilePath,
    };
}
exports.default = getConfigFile;
//# sourceMappingURL=get-config-file.js.map