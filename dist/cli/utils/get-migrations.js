"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMigrations = void 0;
var node_path_1 = __importDefault(require("node:path"));
function getMigrations() {
    var migrationDirs = [];
    var corePackageMigrations = node_path_1.default.resolve(node_path_1.default.join(__dirname, '..', '..', 'migrations'));
    migrationDirs.push(node_path_1.default.join(corePackageMigrations, '*.js'));
    return {
        coreMigrations: migrationDirs,
    };
}
exports.getMigrations = getMigrations;
//# sourceMappingURL=get-migrations.js.map