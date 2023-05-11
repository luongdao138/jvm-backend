"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var reporter_1 = __importDefault(require("../cli/reporter"));
var get_config_file_1 = __importDefault(require("../utils/get-config-file"));
function handleConfigError(error) {
    reporter_1.default.error("Error when loading config: ".concat(error.message));
    if (error.stack) {
        reporter_1.default.error(error.stack);
    }
    process.exit(1);
}
function default_1(rootDirectory) {
    var _a, _b;
    var _c = (0, get_config_file_1.default)(rootDirectory, 'jvm-config.js'), configModule = _c.configModule, configFilePath = _c.configFilePath, error = _c.error;
    if (error) {
        handleConfigError(error);
    }
    reporter_1.default.info("Loaded config module with path: ".concat(configFilePath));
    if (!((_a = configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig) === null || _a === void 0 ? void 0 : _a.redis_url)) {
        reporter_1.default.warn("\n       [jwm-config] \u26A0\uFE0F redis_url not found. A fake redis instance will be used.\n     ");
    }
    if (!((_b = configModule === null || configModule === void 0 ? void 0 : configModule.projectConfig) === null || _b === void 0 ? void 0 : _b.database_type)) {
        reporter_1.default.warn("[jvm-config] \u26A0\uFE0F database_type not found. fallback to default postgres.");
    }
    return {
        projectConfig: __assign({}, configModule.projectConfig),
        plugins: configModule.plugins || [],
    };
}
exports.default = default_1;
//# sourceMappingURL=config.js.map