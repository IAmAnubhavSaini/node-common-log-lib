# @f0c1s/node-common-log-lib

A simple logging library.

## Installation

```shell
npm i @f0c1s/node-common-log-lib
```

## Usage

```javascript
const {default: log, TypesEnum} = require('@f0c1s/node-common-log-lib')

log('>>some tag from @f0c1s/node-common-log-tag>', "Some message!", TypesEnum.INFO)
// >>some tag from @f0c1s/node-common-log-tag> Some message!

log('>>some tag from @f0c1s/node-common-log-tag>', "Some message!", TypesEnum.ERROR)
// >>some tag from @f0c1s/node-common-log-tag> Some message!
// Exiting application on ERROR
// Exiting application on ERROR

```
