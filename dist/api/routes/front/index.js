"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = require("express");
var parse_cors_origin_1 = require("../../../utils/parse-cors-origin");
var user_1 = __importDefault(require("./user"));
var frontRoute = (0, express_1.Router)();
function default_1(masterRoute, container, config) {
    var frontCors = (0, parse_cors_origin_1.parseCorsOrigin)(config.projectConfig.front_cors || '');
    frontRoute.use((0, cors_1.default)({
        credentials: true,
        origin: frontCors,
    }));
    (0, user_1.default)(frontRoute);
    masterRoute.use('/front', frontRoute);
    return masterRoute;
}
exports.default = default_1;
//# sourceMappingURL=index.js.map