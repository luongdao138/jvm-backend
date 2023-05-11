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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../common/models/base-entity");
var generate_entity_id_1 = __importDefault(require("../utils/generate-entity-id"));
var user_1 = require("./user");
var Comment = exports.Comment = (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Comment.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.default)(this.id, 'p_cmt');
    };
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
        __metadata("design:type", Object)
    ], Comment.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'text', nullable: true }),
        __metadata("design:type", Object)
    ], Comment.prototype, "text", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
        __metadata("design:type", String)
    ], Comment.prototype, "user_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_1.User; }),
        (0, typeorm_1.JoinColumn)({ referencedColumnName: 'id', name: 'user_id' }),
        __metadata("design:type", user_1.User)
    ], Comment.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Comment.prototype, "beforeInsert", null);
    Comment = __decorate([
        (0, typeorm_1.Entity)()
    ], Comment);
    return Comment;
}(base_entity_1.BaseEntity));
//# sourceMappingURL=comment.js.map