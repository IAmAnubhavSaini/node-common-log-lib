enum LogTypes {
    INFO = "INFO",
    ERROR = "ERROR",
    WARN = "WARN",
    LOG = "LOG",
}

const TYPES = {
    INFO: console.info,
    ERROR: console.error,
    WARN: console.warn,
    LOG: console.log,
};

function log(tag: string, message = "-", severity: LogTypes = LogTypes.INFO): void {
    let _logFn: (now: number, tag?: string, severity?: string, message?: string) => never | any;
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

export { log, LogTypes };
