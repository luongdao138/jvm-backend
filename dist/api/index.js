"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var error_handler_1 = __importDefault(require("./middlewares/error-handler"));
var admin_1 = __importDefault(require("./routes/admin"));
var front_1 = __importDefault(require("./routes/front"));
function default_1(container, config) {
    var masterRoute = (0, express_1.Router)();
    (0, front_1.default)(masterRoute, container, config);
    (0, admin_1.default)(masterRoute, container, config);
    masterRoute.use(error_handler_1.default);
    return masterRoute;
}
exports.default = default_1;
//# sourceMappingURL=index.js.map