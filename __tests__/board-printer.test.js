import { checkIfNoMovesLeft } from "../board-printer";

test("checkIfNoMovesLeft should return true if there are no moves left", () => {
  const board = [];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});

// Additional tests can be added here to cover more scenarios for checkIfNoMovesLeft function
test("checkIfNoMovesLeft should return false if there are moves left", () => {
  const board = [
    ['X', 'O', 'X'],
    ['O', '_', 'X'],
    ['X', 'O', 'O']
  ];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});

test("checkIfNoMovesLeft should return true for a full board", () => {
  const board = [
    ['X', 'O', 'X'],
    ['O', 'X', 'X'],
    ['X', 'O', 'O']
  ];
  expect(checkIfNoMovesLeft(board)).toBe(true);
});

test("checkIfNoMovesLeft should return false for an empty board", () => {
  const board = [
    ['_', '_', '_'],
    ['_', '_', '_'],
    ['_', '_', '_']
  ];
  expect(checkIfNoMovesLeft(board)).toBe(false);
});
