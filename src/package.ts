enum TypesEnum {
    INFO = 'INFO',
    ERROR = 'ERROR',
    WARN = 'WARN',
    LOG = 'LOG'
}

const TYPES = {
    INFO: console.info,
    ERROR: console.error,
    WARN: console.warn,
    LOG: console.log
};

function exitOnError(severity: TypesEnum) {
    const exitMessage = 'Exiting application on ERROR';
    if (severity === TypesEnum.ERROR) {
        console.log(exitMessage);
        console.error(exitMessage);
        process.exit(1);
    }
}

function log(tag: string, message = '-', severity: TypesEnum = TypesEnum.INFO) {
    let _logFn: ((tag?: string, message?: string) => never | any);
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

export default log;

export {
    TypesEnum
};
