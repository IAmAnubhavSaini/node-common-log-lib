"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogTypes = void 0;
exports.log = log;
var LogTypes;
(function (LogTypes) {
    LogTypes["INFO"] = "INFO";
    LogTypes["ERROR"] = "ERROR";
    LogTypes["WARN"] = "WARN";
    LogTypes["LOG"] = "LOG";
})(LogTypes || (exports.LogTypes = LogTypes = {}));
const TYPES = {
    INFO: console.info,
    ERROR: console.error,
    WARN: console.warn,
    LOG: console.log,
};
function log(tag, message = "-", severity = LogTypes.INFO) {
    let _logFn;
    switch (severity) {
        case LogTypes.ERROR:
            _logFn = TYPES.ERROR;
            break;
        case LogTypes.INFO:
            _logFn = TYPES.INFO;
            break;
        case LogTypes.WARN:
            _logFn = TYPES.WARN;
            break;
        case LogTypes.LOG:
            _logFn = TYPES.LOG;
            break;
        default:
            _logFn = TYPES.INFO;
    }
    _logFn(Date.now(), tag, `[${severity.toString()}]`, message);
    return;
}
//# sourceMappingURL=package.js.map