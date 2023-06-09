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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GracefulShutdownServer = void 0;
var GracefulShutdownServer = (function () {
    function GracefulShutdownServer() {
    }
    GracefulShutdownServer.create = function (originalServer, waitingResponseTime) {
        var _this = this;
        if (waitingResponseTime === void 0) { waitingResponseTime = 200; }
        var connectionId = 0;
        var shutdownPromise;
        var allSockets = {};
        var server = originalServer;
        server.isShuttingDown = false;
        server.shutdown = function (timeout) {
            if (timeout === void 0) { timeout = 0; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (server.isShuttingDown) {
                        return [2, shutdownPromise];
                    }
                    server.isShuttingDown = true;
                    shutdownPromise = new Promise(function (resolve, reject) {
                        var forceQuit = false;
                        var cleanInterval = undefined;
                        try {
                            server.close(function () {
                                clearInterval(cleanInterval);
                                resolve();
                            });
                            if (+timeout > 0) {
                                setTimeout(function () {
                                    forceQuit = true;
                                }, timeout).unref();
                            }
                            cleanInterval = setInterval(function () {
                                var e_1, _a;
                                if (!Object.keys(allSockets).length) {
                                    clearInterval(cleanInterval);
                                }
                                try {
                                    for (var _b = __values(Object.keys(allSockets)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        var key = _c.value;
                                        var socketId = +key;
                                        if (forceQuit || allSockets[socketId]._idle) {
                                            allSockets[socketId].destroy();
                                            delete allSockets[socketId];
                                        }
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                }
                            }, waitingResponseTime);
                        }
                        catch (error) {
                            if (cleanInterval) {
                                clearInterval(cleanInterval);
                            }
                            return reject(error);
                        }
                    });
                    return [2, shutdownPromise];
                });
            });
        };
        var onConnect = function (originalSocket) {
            connectionId++;
            var socket = originalSocket;
            socket._idle = true;
            socket._connectionId = connectionId;
            allSockets[connectionId] = socket;
            socket.on('close', function () {
                delete allSockets[socket._connectionId];
            });
        };
        server.on('connection', onConnect);
        server.on('secureConnection', onConnect);
        server.on('request', function (req, res) {
            var customSocket = req.socket;
            customSocket._idle = false;
            res.on('finish', function () {
                customSocket._idle = true;
            });
        });
        return server;
    };
    return GracefulShutdownServer;
}());
exports.GracefulShutdownServer = GracefulShutdownServer;
//# sourceMappingURL=graceful-shutdown-server.js.map