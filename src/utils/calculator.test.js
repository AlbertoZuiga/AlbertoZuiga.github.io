import { describe, expect, it } from "vitest";
import { calculate } from "./calculator";

describe("calculate", () => {
  it("suma, resta y multiplica", () => {
    expect(calculate(2, 3, "sum")).toBe(5);
    expect(calculate(2, 3, "dif")).toBe(-1);
    expect(calculate(2, 3, "mul")).toBe(6);
  });

  it("divide y devuelve Error ante división por cero", () => {
    expect(calculate(6, 3, "div")).toBe(2);
    expect(calculate(6, 0, "div")).toBe("Error");
  });

  it("devuelve el segundo operando sin operación", () => {
    expect(calculate(6, 3, null)).toBe(3);
    expect(calculate(6, 3, "unknown")).toBe(3);
  });
});
