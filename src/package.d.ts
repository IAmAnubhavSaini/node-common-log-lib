declare enum LogTypes {
    INFO = "INFO",
    ERROR = "ERROR",
    WARN = "WARN",
    LOG = "LOG"
}
declare function log(tag: string, message?: string, severity?: LogTypes): void;
export default log;
export { LogTypes };
//# sourceMappingURL=package.d.ts.map