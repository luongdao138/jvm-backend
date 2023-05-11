"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentRepository = void 0;
var database_loader_1 = require("../loaders/database-loader");
var models_1 = require("../models");
exports.CommentRepository = database_loader_1.dataSource.getRepository(models_1.Comment);
exports.default = exports.CommentRepository;
//# sourceMappingURL=comment.js.map