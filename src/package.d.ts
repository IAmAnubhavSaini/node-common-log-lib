declare enum TypesEnum {
    INFO = "INFO",
    ERROR = "ERROR",
    WARN = "WARN",
    LOG = "LOG"
}
declare function log(tag: string, message: string | undefined, severity: TypesEnum): void;
export default log;
export { TypesEnum };
//# sourceMappingURL=package.d.ts.map