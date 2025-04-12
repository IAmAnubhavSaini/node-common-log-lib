# @f0c1s/node-common-log-lib

A simple logging library.

## Installation

```shell
npm install @f0c1s/node-common-log-lib
```

## Usage

```javascript
> const {log, LogTypes} = require("./src/package.js");

> log(Date.now(), "Transaction 123", LogTypes.ERROR);
1744470401951 1744470401951 [ERROR] Transaction 123

> log("service1", "Transaction 123", LogTypes.ERROR);
1744470420862 service1 [ERROR] Transaction 123

> log("t", "Transaction 123", LogTypes.ERROR);
1744470427401 t [ERROR] Transaction 123

> log("t", "Transaction 123", LogTypes.INFO);
1744470431082 t [INFO] Transaction 123

> log("T", "Transaction 123", LogTypes.INFO);
1744470442422 T [INFO] Transaction 123

> log("SERV", "Transaction 123", LogTypes.LOG);
1744470454570 SERV [LOG] Transaction 123

```

## License

MIT

Copyright (c) 2021-2025 Anubhav Saini
