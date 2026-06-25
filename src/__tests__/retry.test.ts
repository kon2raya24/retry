import { describe, it, expect } from "vitest";
import { retry } from "../retry";

describe("retry", () => {
  it("should be a function", () => {
    expect(typeof retry).toBe("function");
  });
  it("should throw on null input", () => {
    expect(() => retry(null as any)).toThrow();
  });
});
