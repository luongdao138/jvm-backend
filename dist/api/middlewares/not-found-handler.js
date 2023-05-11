"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../../common");
var utils_1 = require("../../utils");
function default_1(req, res) {
    var notFoundError = new common_1.AppError(common_1.AppError.Types.NOT_FOUND, 'Resource not found!');
    var formattedError = (0, utils_1.formatException)(notFoundError);
    res.status(+formattedError.code).json(formattedError);
}
exports.default = default_1;
//# sourceMappingURL=not-found-handler.js.map