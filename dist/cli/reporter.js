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
exports.Reporter = void 0;
var ora_1 = __importDefault(require("ora"));
var stack_trace_1 = __importDefault(require("stack-trace"));
var ulid_1 = require("ulid");
var winston_1 = __importDefault(require("winston"));
var LOG_LEVEL = process.env.LOG_LEVEL || 'silly';
var NODE_ENV = process.env.NODE_ENV || 'development';
var IS_DEV = NODE_ENV === 'development';
var transports = [];
if (!IS_DEV) {
    transports.push(new winston_1.default.transports.Console());
}
else {
    transports.push(new winston_1.default.transports.Console({
        format: winston_1.default.format.combine(winston_1.default.format.cli(), winston_1.default.format.splat()),
    }));
}
var loggerInstance = winston_1.default.createLogger({
    level: LOG_LEVEL,
    levels: winston_1.default.config.npm.levels,
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
    }), winston_1.default.format.errors({ stack: true }), winston_1.default.format.splat(), winston_1.default.format.json()),
    transports: transports,
});
loggerInstance.stream = {
    write: function (message) {
        logger.info(message);
    },
};
var Reporter = (function () {
    function Reporter(_a) {
        var logger = _a.logger, activityLogger = _a.activityLogger;
        var _this = this;
        this.shouldLog = function (level) {
            level = _this.loggerInstance_.levels[level];
            var logLevel = _this.loggerInstance_.levels[_this.loggerInstance_.level];
            return level <= logLevel;
        };
        this.setLogLevel = function (level) {
            _this.loggerInstance_.level = level;
        };
        this.unsetLogLevel = function () {
            _this.loggerInstance_.level = LOG_LEVEL;
        };
        this.activity = function (message, config) {
            if (config === void 0) { config = {}; }
            var id = (0, ulid_1.ulid)();
            if (IS_DEV && _this.shouldLog('info')) {
                var activity = _this.ora_(message).start();
                _this.activities_[id] = {
                    activity: activity,
                    config: config,
                    start: Date.now(),
                };
                return id;
            }
            else {
                _this.activities_[id] = {
                    start: Date.now(),
                    config: config,
                };
                _this.loggerInstance_.log({
                    activity_id: id,
                    level: 'info',
                    config: config,
                    message: message,
                });
                return id;
            }
        };
        this.progress = function (activityId, message) {
            var toLog = {
                level: 'info',
                message: message,
            };
            if (typeof activityId === 'string' && _this.activities_[activityId]) {
                var activity = _this.activities_[activityId];
                if (activity.activity) {
                    activity.text = message;
                }
                else {
                    toLog.activity_id = activityId;
                    _this.loggerInstance_.log(toLog);
                }
            }
            else {
                _this.loggerInstance_.log(toLog);
            }
        };
        this.error = function (messageOrError, error) {
            var message = messageOrError;
            if (typeof messageOrError === 'object') {
                message = messageOrError.message;
                error = messageOrError;
            }
            var toLog = {
                level: 'error',
                message: message,
            };
            if (error) {
                toLog.stack = stack_trace_1.default.parse(error);
            }
            _this.loggerInstance_.log(toLog);
            if (error && IS_DEV) {
                console.log(error);
            }
        };
        this.failure = function (activityId, message) {
            var time = Date.now();
            var toLog = {
                level: 'error',
                message: message,
            };
            if (typeof activityId === 'string' && _this.activities_[activityId]) {
                var activity = _this.activities_[activityId];
                if (activity.activity) {
                    activity.activity.fail("".concat(message, " \u2013 ").concat(time - activity.start));
                }
                else {
                    toLog.duration = time - activity.start;
                    toLog.activity_id = activityId;
                    _this.loggerInstance_.log(toLog);
                }
            }
            else {
                _this.loggerInstance_.log(toLog);
            }
            if (_this.activities_[activityId]) {
                var activity = _this.activities_[activityId];
                return __assign(__assign({}, activity), { duration: time - activity.start });
            }
            return null;
        };
        this.success = function (activityId, message) {
            var time = Date.now();
            var toLog = {
                level: 'info',
                message: message,
            };
            if (typeof activityId === 'string' && _this.activities_[activityId]) {
                var activity = _this.activities_[activityId];
                if (activity.activity) {
                    activity.activity.succeed("".concat(message, " \u2013 ").concat(time - activity.start, "ms"));
                }
                else {
                    toLog.duration = time - activity.start;
                    toLog.activity_id = activityId;
                    _this.loggerInstance_.log(toLog);
                }
            }
            else {
                _this.loggerInstance_.log(toLog);
            }
            if (_this.activities_[activityId]) {
                var activity = _this.activities_[activityId];
                return __assign(__assign({}, activity), { duration: time - activity.start });
            }
            return null;
        };
        this.debug = function (message) {
            _this.loggerInstance_.log({
                level: 'debug',
                message: message,
            });
        };
        this.info = function (message) {
            _this.loggerInstance_.log({
                level: 'info',
                message: message,
            });
        };
        this.warn = function (message) {
            _this.loggerInstance_.warn({
                level: 'warn',
                message: message,
            });
        };
        this.log = function (level, message, callback) {
            _this.loggerInstance_.log(level, message, callback);
        };
        this.activities_ = [];
        this.loggerInstance_ = logger;
        this.ora_ = activityLogger;
    }
    return Reporter;
}());
exports.Reporter = Reporter;
var logger = new Reporter({
    logger: loggerInstance,
    activityLogger: ora_1.default,
});
exports.default = logger;
//# sourceMappingURL=reporter.js.map