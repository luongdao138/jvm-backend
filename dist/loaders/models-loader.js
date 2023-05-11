"use strict";
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var awilix_1 = require("awilix");
var glob_1 = require("glob");
var path_1 = __importDefault(require("path"));
var typeorm_1 = require("typeorm");
var format_registration_name_1 = __importDefault(require("../utils/format-registration-name"));
var module_1 = require("../utils/module");
function default_1(_a, config) {
    var container = _a.container;
    if (config === void 0) { config = { register: true }; }
    return __awaiter(this, void 0, void 0, function () {
        var corePath, coreFull, core, modules;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    corePath = '../models/*.js';
                    coreFull = path_1.default.join(__dirname, corePath);
                    core = glob_1.glob.sync(coreFull, {
                        cwd: __dirname,
                        ignore: {
                            ignored: function (p) {
                                return p.name.includes('index.js') || p.name.includes('index.ts');
                            },
                        },
                    });
                    modules = [];
                    return [4, Promise.all(core.map(function (modulePath) { return __awaiter(_this, void 0, void 0, function () {
                            var loaded;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, (0, module_1.loadModule)(modulePath)];
                                    case 1:
                                        loaded = _a.sent();
                                        if (loaded) {
                                            Object.entries(loaded).map(function (_a) {
                                                var _b;
                                                var _c = __read(_a, 2), val = _c[1];
                                                if ((typeof val === 'function' || val instanceof typeorm_1.EntitySchema) && config.register) {
                                                    var moduleName = (0, format_registration_name_1.default)(modulePath);
                                                    container.register((_b = {},
                                                        _b[moduleName] = (0, awilix_1.asClass)(val),
                                                        _b));
                                                    container.registerAdd('db_entities', (0, awilix_1.asValue)(val));
                                                    modules.push(val);
                                                }
                                            });
                                        }
                                        return [2];
                                }
                            });
                        }); }))];
                case 1:
                    _b.sent();
                    return [2, modules];
            }
        });
    });
}
exports.default = default_1;
//# sourceMappingURL=models-loader.js.map