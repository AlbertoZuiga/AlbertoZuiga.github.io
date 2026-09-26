import { describe, expect, it } from "vitest";
import { levelToPercent } from "./skillLevel";

describe("levelToPercent", () => {
  it("mapea niveles conocidos a porcentaje", () => {
    expect(levelToPercent("Básico")).toBe(25);
    expect(levelToPercent("Intermedio-Avanzado")).toBe(75);
    expect(levelToPercent("Nativo")).toBe(100);
  });

  it("devuelve 0 para niveles desconocidos", () => {
    expect(levelToPercent("Experto")).toBe(0);
    expect(levelToPercent(undefined)).toBe(0);
  });
});
