"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var awilix_1 = require("awilix");
var medusa_telemetry_1 = require("medusa-telemetry");
var os_1 = require("os");
var not_found_handler_1 = __importDefault(require("../api/middlewares/not-found-handler"));
var reporter_1 = __importDefault(require("../cli/reporter"));
var utils_1 = require("../utils");
var api_loader_1 = __importDefault(require("./api-loader"));
var config_1 = __importDefault(require("./config"));
var database_loader_1 = __importDefault(require("./database-loader"));
var express_loader_1 = __importDefault(require("./express-loader"));
var models_loader_1 = __importDefault(require("./models-loader"));
var plugins_loader_1 = __importStar(require("./plugins-loader"));
var redis_loader_1 = __importDefault(require("./redis-loader"));
var repositores_loader_1 = __importDefault(require("./repositores-loader"));
var request_context_1 = __importDefault(require("./request-context"));
var services_loader_1 = __importDefault(require("./services-loader"));
var swagger_loader_1 = __importDefault(require("./swagger-loader"));
var appLoader = function (_a) {
    var expressApp = _a.expressApp, directory = _a.directory;
    return __awaiter(void 0, void 0, void 0, function () {
        var configModule, container, modelsActivity, mAct, pmActivity, pmAct, dbActivity, dataSource, dbAct, repoActivity, rAct, servicesActivity, servAct, expActivity, exAct, pluginsActivity, pAct, apiActivity, apiAct;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    configModule = (0, config_1.default)(directory);
                    container = (0, utils_1.createAppContainer)();
                    container.register('configModule', (0, awilix_1.asValue)(configModule));
                    (0, medusa_telemetry_1.track)('Config module loaded');
                    (0, request_context_1.default)(expressApp);
                    (0, medusa_telemetry_1.track)('Request context loaded');
                    container.register({
                        logger: (0, awilix_1.asValue)(reporter_1.default),
                    });
                    return [4, (0, redis_loader_1.default)({ container: container, configModule: configModule, logger: reporter_1.default })];
                case 1:
                    _b.sent();
                    (0, medusa_telemetry_1.track)('Redis DB inited');
                    modelsActivity = reporter_1.default.activity("Initializing models".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)('MODELS_INIT_STARTED');
                    return [4, (0, models_loader_1.default)({ container: container })];
                case 2:
                    _b.sent();
                    mAct = reporter_1.default.success(modelsActivity, 'Models initialized') || {};
                    (0, medusa_telemetry_1.track)('MODELS_INIT_COMPLETED', { duration: mAct.duration });
                    pmActivity = reporter_1.default.activity("Initializing plugin models".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)('PLUGIN_MODELS_INIT_STARTED');
                    return [4, (0, plugins_loader_1.registerPluginModels)({ container: container, rootDirectory: directory, configModule: configModule })];
                case 3:
                    _b.sent();
                    pmAct = reporter_1.default.success(pmActivity, 'Plugin models initialized') || {};
                    (0, medusa_telemetry_1.track)('PLUGIN_MODELS_INIT_COMPLETED', { duration: pmAct.duration });
                    dbActivity = reporter_1.default.activity("Initializing database".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)('DATABASE_INIT_STARTED');
                    return [4, (0, database_loader_1.default)({ container: container, configModule: configModule })];
                case 4:
                    dataSource = _b.sent();
                    dbAct = reporter_1.default.success(dbActivity, 'Database initialized') || {};
                    (0, medusa_telemetry_1.track)('DATABASE_INIT_COMPLETED', { duration: dbAct.duration });
                    repoActivity = reporter_1.default.activity("Initializing repositories".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)('REPOSITORIES_INIT_STARTED');
                    return [4, (0, repositores_loader_1.default)({ container: container })];
                case 5:
                    _b.sent();
                    rAct = reporter_1.default.success(repoActivity, 'Repositories initialized') || {};
                    (0, medusa_telemetry_1.track)('REPOSITORIES_INIT_COMPLETED', { duration: rAct.duration });
                    container.register({
                        manager: (0, awilix_1.asValue)(dataSource.manager),
                    });
                    servicesActivity = reporter_1.default.activity("Initializing services".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)('SERVICES_INIT_STARTED');
                    return [4, (0, services_loader_1.default)({ container: container, configModule: configModule })];
                case 6:
                    _b.sent();
                    servAct = reporter_1.default.success(servicesActivity, 'Services initialized') || {};
                    (0, medusa_telemetry_1.track)('SERVICES_INIT_COMPLETED', { duration: servAct.duration });
                    expActivity = reporter_1.default.activity("Initializing express".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)('EXPRESS_INIT_STARTED');
                    return [4, (0, express_loader_1.default)({ app: expressApp, configModule: configModule })];
                case 7:
                    _b.sent();
                    exAct = reporter_1.default.success(expActivity, 'Express intialized') || {};
                    (0, medusa_telemetry_1.track)('EXPRESS_INIT_COMPLETED', { duration: exAct.duration });
                    expressApp.use(function (req, res, next) {
                        container.register({ manager: (0, awilix_1.asValue)(dataSource.manager) });
                        req.scope = container.createScope();
                        next();
                    });
                    pluginsActivity = reporter_1.default.activity("Initializing plugins".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)('PLUGINS_INIT_STARTED');
                    return [4, (0, plugins_loader_1.default)({
                            activityId: pluginsActivity,
                            app: expressApp,
                            configModule: configModule,
                            container: container,
                            rootDirectory: directory,
                        })];
                case 8:
                    _b.sent();
                    pAct = reporter_1.default.success(pluginsActivity, 'Plugins intialized') || {};
                    (0, medusa_telemetry_1.track)('PLUGINS_INIT_COMPLETED', { duration: pAct.duration });
                    apiActivity = reporter_1.default.activity("Initializing API".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)('API_INIT_STARTED');
                    return [4, (0, api_loader_1.default)({ container: container, app: expressApp })];
                case 9:
                    _b.sent();
                    apiAct = reporter_1.default.success(apiActivity, 'API initialized') || {};
                    (0, medusa_telemetry_1.track)('API_INIT_COMPLETED', { duration: apiAct.duration });
                    return [4, (0, swagger_loader_1.default)(expressApp)];
                case 10:
                    _b.sent();
                    expressApp.use('*', not_found_handler_1.default);
                    return [2, { app: expressApp, container: container }];
            }
        });
    });
};
exports.default = appLoader;
//# sourceMappingURL=index.js.map