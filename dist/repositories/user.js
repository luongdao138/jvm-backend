"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
var database_loader_1 = require("../loaders/database-loader");
var models_1 = require("../models");
exports.UserRepository = database_loader_1.dataSource.getRepository(models_1.User);
exports.default = exports.UserRepository;
//# sourceMappingURL=user.js.map