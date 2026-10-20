import { describe, expect, it } from "vitest";
import { levelToPercent } from "./skillLevel";

describe("levelToPercent", () => {
  it("mapea niveles conocidos a porcentaje", () => {
    expect(levelToPercent("basic")).toBe(25);
    expect(levelToPercent("intermediate-advanced")).toBe(75);
    expect(levelToPercent("native")).toBe(100);
  });

  it("devuelve 0 para niveles desconocidos", () => {
    expect(levelToPercent("expert")).toBe(0);
    expect(levelToPercent(undefined)).toBe(0);
  });
});
