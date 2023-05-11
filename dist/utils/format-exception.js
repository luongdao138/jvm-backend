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
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatException = exports.PostgresError = void 0;
var zod_1 = require("zod");
var common_1 = require("../common");
var PostgresError;
(function (PostgresError) {
    PostgresError["DUPLICATE_ERROR"] = "23505";
    PostgresError["FOREIGN_KEY_ERROR"] = "23503";
    PostgresError["SERIALIZATION_FAILURE"] = "40001";
    PostgresError["NULL_VIOLATION"] = "23502";
})(PostgresError = exports.PostgresError || (exports.PostgresError = {}));
function formatException(err) {
    var _a, _b;
    var message = (_a = err.message) !== null && _a !== void 0 ? _a : 'Unknown error occured!';
    var type;
    if (err instanceof common_1.AppError || 'type' in err) {
        type = err.type;
    }
    else if (err instanceof zod_1.ZodError) {
        var zodFormattedError = err.issues;
        type = common_1.AppError.Types.ZOD_ERROR;
        message = (_b = zodFormattedError[0].message) !== null && _b !== void 0 ? _b : 'Unknown error occured!';
    }
    else {
        type = common_1.AppError.Types.SERVER_ERROR;
    }
    var formattedErr = new common_1.AppError(type, message);
    return __assign(__assign({}, formattedErr), { stack: err.stack });
}
exports.formatException = formatException;
//# sourceMappingURL=format-exception.js.map