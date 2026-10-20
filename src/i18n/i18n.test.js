import { describe, expect, it } from "vitest";
import es from "./es.json";
import en from "./en.json";
import { langFromPath, localePath, switchPath } from "./locale";

const leafKeys = (obj, prefix = "") =>
  Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === "object" && !Array.isArray(v)
      ? leafKeys(v, `${prefix}${k}.`)
      : [`${prefix}${k}`]
  );

describe("diccionarios", () => {
  it("es y en tienen las mismas claves", () => {
    expect(leafKeys(en).sort()).toEqual(leafKeys(es).sort());
  });
});

describe("locale helpers", () => {
  it("detecta idioma por prefijo", () => {
    expect(langFromPath("/")).toBe("es");
    expect(langFromPath("/about")).toBe("es");
    expect(langFromPath("/en")).toBe("en");
    expect(langFromPath("/en/about")).toBe("en");
    expect(langFromPath("/english")).toBe("es");
  });

  it("construye y alterna rutas", () => {
    expect(localePath("es", "/about")).toBe("/about");
    expect(localePath("en", "/")).toBe("/en");
    expect(localePath("en", "/projects/clock")).toBe("/en/projects/clock");
    expect(switchPath("/en/about", "es")).toBe("/about");
    expect(switchPath("/en", "es")).toBe("/");
    expect(switchPath("/about", "en")).toBe("/en/about");
    expect(switchPath("/", "en")).toBe("/en");
  });
});
