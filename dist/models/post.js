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
exports.Post = void 0;
var typeorm_1 = require("typeorm");
var base_entity_1 = require("../common/models/base-entity");
var generate_entity_id_1 = __importDefault(require("../utils/generate-entity-id"));
var user_1 = require("./user");
var Post = exports.Post = (function (_super) {
    __extends(Post, _super);
    function Post() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Post.prototype.beforeInsert = function () {
        this.id = (0, generate_entity_id_1.default)(this.id, 'post');
    };
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
        __metadata("design:type", Object)
    ], Post.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'text', nullable: true }),
        __metadata("design:type", String)
    ], Post.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
        __metadata("design:type", String)
    ], Post.prototype, "user_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return user_1.User; }),
        (0, typeorm_1.JoinColumn)({ referencedColumnName: 'id', name: 'user_id' }),
        __metadata("design:type", user_1.User)
    ], Post.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Post.prototype, "beforeInsert", null);
    Post = __decorate([
        (0, typeorm_1.Entity)()
    ], Post);
    return Post;
}(base_entity_1.BaseEntity));
//# sourceMappingURL=post.js.map