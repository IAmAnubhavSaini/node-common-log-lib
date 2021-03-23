"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypesEnum = void 0;
var TypesEnum;
(function (TypesEnum) {
    TypesEnum["INFO"] = "INFO";
    TypesEnum["ERROR"] = "ERROR";
    TypesEnum["WARN"] = "WARN";
    TypesEnum["LOG"] = "LOG";
})(TypesEnum || (TypesEnum = {}));
exports.TypesEnum = TypesEnum;
var TYPES = {
    INFO: console.info,
    ERROR: console.error,
    WARN: console.warn,
    LOG: console.log
};
function exitOnError(severity) {
    var exitMessage = 'Exiting application on ERROR';
    if (severity === TypesEnum.ERROR) {
        console.log(exitMessage);
        console.error(exitMessage);
        process.exit(1);
    }
}
function log(tag, message, severity) {
    if (message === void 0) { message = '-'; }
    if (severity === void 0) { severity = TypesEnum.INFO; }
    var _logFn;
    switch (severity) {
        case TypesEnum.ERROR:
            _logFn = TYPES.ERROR;
            break;
        case TypesEnum.INFO:
            _logFn = TYPES.INFO;
            break;
        case TypesEnum.WARN:
            _logFn = TYPES.WARN;
            break;
        case TypesEnum.LOG:
            _logFn = TYPES.LOG;
            break;
        default:
            _logFn = TYPES.INFO;
    }
    _logFn(tag, message);
    exitOnError(severity);
}
exports.default = log;
//# sourceMappingURL=package.js.map