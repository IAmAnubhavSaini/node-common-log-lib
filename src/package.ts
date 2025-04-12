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

function exitOnError(severity: LogTypes) {
    const exitMessage = "Exiting application on ERROR";
    if (severity === LogTypes.ERROR) {
        console.log(exitMessage);
        console.error(exitMessage);
        process.exit(1);
    }
}

function log(tag: string, message = "-", severity: LogTypes = LogTypes.INFO) {
    let _logFn: (tag?: string, message?: string) => never | any;
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

export default log;

export { LogTypes };
