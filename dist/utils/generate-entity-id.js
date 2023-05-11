"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ulid_1 = require("ulid");
function generateEntityId(idProperty, prefix) {
    if (idProperty) {
        return idProperty;
    }
    var id = (0, ulid_1.ulid)();
    if (!(prefix === null || prefix === void 0 ? void 0 : prefix.trim().length)) {
        return id;
    }
    prefix = prefix ? "".concat(prefix, "_") : '';
    return "".concat(prefix).concat(id);
}
exports.default = generateEntityId;
//# sourceMappingURL=generate-entity-id.js.map