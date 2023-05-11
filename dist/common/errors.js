"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppError = exports.AppErrorDict = exports.AppErrorTypeDict = void 0;
exports.AppErrorTypeDict = {
    NOT_FOUND: 'not_found',
    UNAUTHORIZED: 'unauthorized',
    UNAUTHENTICATED: 'unauthenticated',
    BAD_REQUEST: 'bad_request',
    ZOD_ERROR: 'validation_error',
    DUPLICATE_ERROR: 'duplicate_error',
    SERVER_ERROR: 'server_error',
};
exports.AppErrorDict = (_a = {},
    _a[exports.AppErrorTypeDict.NOT_FOUND] = 404,
    _a[exports.AppErrorTypeDict.UNAUTHORIZED] = 401,
    _a[exports.AppErrorTypeDict.UNAUTHENTICATED] = 403,
    _a[exports.AppErrorTypeDict.BAD_REQUEST] = 400,
    _a[exports.AppErrorTypeDict.ZOD_ERROR] = 400,
    _a[exports.AppErrorTypeDict.DUPLICATE_ERROR] = 422,
    _a[exports.AppErrorTypeDict.SERVER_ERROR] = 500,
    _a);
var AppError = exports.AppError = (function (_super) {
    __extends(AppError, _super);
    function AppError(type, message) {
        var _this = this;
        var _a;
        _this = _super.call(this) || this;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, AppError);
        }
        _this.type = type;
        _this.code = (_a = exports.AppErrorDict[type]) !== null && _a !== void 0 ? _a : AppError[exports.AppErrorTypeDict.SERVER_ERROR];
        _this.timestamp = new Date().toISOString();
        _this.message = message;
        return _this;
    }
    AppError.Types = exports.AppErrorTypeDict;
    return AppError;
}(Error));
//# sourceMappingURL=errors.js.map