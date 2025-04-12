"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const package_1 = require("./package");
describe("log", () => {
    it("is a function", () => {
        expect(typeof package_1.log).toEqual("function");
    });
});
describe("LogTypes", () => {
    it("is a bunch of strings?", () => {
        expect(Object.keys(package_1.LogTypes)).toEqual(["INFO", "ERROR", "WARN", "LOG"]);
    });
});
//# sourceMappingURL=package.spec.js.map