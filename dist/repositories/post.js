"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRepository = void 0;
var database_loader_1 = require("../loaders/database-loader");
var models_1 = require("../models");
exports.PostRepository = database_loader_1.dataSource.getRepository(models_1.Post);
exports.default = exports.PostRepository;
//# sourceMappingURL=post.js.map