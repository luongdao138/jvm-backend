"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_path_1 = require("node:path");
function upperCaseWord(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
function default_1(path) {
    var parsed = (0, node_path_1.parse)(path);
    var parsedDir = (0, node_path_1.parse)(parsed.dir);
    var fileName = parsed.name;
    var namespace = parsedDir.name;
    var registrationFileName = fileName
        .split('-')
        .reduce(function (acc, current, index) { return (index === 0 ? acc + current : acc + upperCaseWord(current)); }, '');
    if (namespace.endsWith('ies')) {
        namespace = namespace.slice(0, namespace.length - 3) + 'ys';
    }
    namespace = namespace.slice(0, -1);
    var registrationNamespace = upperCaseWord(namespace);
    return registrationFileName + registrationNamespace;
}
exports.default = default_1;
//# sourceMappingURL=format-registration-name.js.map