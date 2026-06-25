import { describe, it, expect } from "vitest";
import { retrySync } from "../retrysync";

describe("retrySync", () => {
  it("should be a function", () => {
    expect(typeof retrySync).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => retrySync(null as any)).toThrow();
  });
});
