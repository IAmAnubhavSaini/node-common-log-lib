"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogTypes = void 0;
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
function exitOnError(severity) {
    const exitMessage = "Exiting application on ERROR";
    if (severity === LogTypes.ERROR) {
        console.log(exitMessage);
        console.error(exitMessage);
        process.exit(1);
    }
}
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
    _logFn(tag, message);
    exitOnError(severity);
}
exports.default = log;
//# sourceMappingURL=package.js.map