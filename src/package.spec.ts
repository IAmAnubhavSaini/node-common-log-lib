import log, { LogTypes } from "./package";

describe("log", () => {
    it("is a function", () => {
        expect(typeof log).toEqual("function");
    });
});

describe("LogTypes", () => {
    it("is a bunch of strings?", () => {
        expect(Object.keys(LogTypes)).toEqual(["INFO", "ERROR", "WARN", "LOG"]);
    });
});
