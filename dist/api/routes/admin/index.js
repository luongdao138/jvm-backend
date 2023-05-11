"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var express_1 = require("express");
var parse_cors_origin_1 = require("../../../utils/parse-cors-origin");
var user_1 = __importDefault(require("./user"));
var adminRoute = (0, express_1.Router)();
function default_1(masterRoute, container, config) {
    var adminCors = (0, parse_cors_origin_1.parseCorsOrigin)(config.projectConfig.admin_cors || '');
    adminRoute.use((0, cors_1.default)({
        credentials: true,
        origin: adminCors,
    }));
    (0, user_1.default)(adminRoute);
    masterRoute.use('/admin', adminRoute);
    return masterRoute;
}
exports.default = default_1;
//# sourceMappingURL=index.js.map