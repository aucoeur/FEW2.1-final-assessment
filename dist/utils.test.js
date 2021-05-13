"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
describe("test formatPhone", function () {
    it("should return (123) 456-7890", function () {
        expect(utils_1.formatPhone("1234567890")).toBe("(123) 456-7890");
    });
    it("should chunk non-valid phone numbers", function () {
        expect(utils_1.formatPhone("12345678903")).toBe("12 345 678 903");
        expect(utils_1.formatPhone("12345")).toBe("12 345");
    });
    it("should raise error if not digits", function () {
        expect(utils_1.formatPhone("onetwothree")).toBe("this is not a phone number");
    });
});
//# sourceMappingURL=utils.test.js.map