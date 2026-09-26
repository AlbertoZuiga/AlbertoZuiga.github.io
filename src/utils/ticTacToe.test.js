import { describe, expect, it } from "vitest";
import { checkWin, isDraw } from "./ticTacToe";

const board = (str) => [...str].map((c) => (c === "." ? null : c));

describe("checkWin", () => {
  it("detecta fila, columna y diagonal", () => {
    expect(checkWin(board("XXX......"), "X")).toEqual([0, 1, 2]);
    expect(checkWin(board("O..O..O.."), "O")).toEqual([0, 3, 6]);
    expect(checkWin(board("X...X...X"), "X")).toEqual([0, 4, 8]);
    expect(checkWin(board("..X.X.X.."), "X")).toEqual([2, 4, 6]);
  });

  it("devuelve null si no hay línea del jugador", () => {
    expect(checkWin(board("XXO......"), "X")).toBeNull();
    expect(checkWin(board("XXX......"), "O")).toBeNull();
    expect(checkWin(board("........."), "X")).toBeNull();
  });
});

describe("isDraw", () => {
  it("true solo con tablero lleno", () => {
    expect(isDraw(board("XOXXOXOXO"))).toBe(true);
    expect(isDraw(board("XOXXOXOX."))).toBe(false);
    expect(isDraw(board("........."))).toBe(false);
  });
});
