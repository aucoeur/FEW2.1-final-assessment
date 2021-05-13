import { formatPhone } from './utils'

describe("test formatPhone", () => {
    it("should return (123) 456-7890", () => {
        expect(formatPhone("1234567890")).toBe("(123) 456-7890")
    })
    it("should chunk non-valid phone numbers", () => {
        expect(formatPhone("12345678903")).toBe("12 345 678 903")
        expect(formatPhone("12345")).toBe("12 345")
    })
    it("should raise error if not digits", () => {
        expect(formatPhone("onetwothree")).toBe("this is not a phone number")
    })
})
