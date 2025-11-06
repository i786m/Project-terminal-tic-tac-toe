import {checkRow, checkColumn, checkDiagonal} from '../status-checker.js';
describe('check row', () => { 
test('should return true if player has filled all squares in the specified row', () => {
    let board = [
        ['X', 'X', 'X'],
        ['_', 'O', '_'],
        ['O', '_', '_']
    ];
    expect(checkRow(board, 'X', 0)).toBe(true);
});

test('should return false if player has not filled all squares in the specified row', () => {
    let board = [
        ['X', '_', 'X'],
        ['_', 'O', '_'],
        ['O', '_', '_']
    ];
    expect(checkRow(board, 'X', 0)).toBe(false);
});
//invalid row number
test('should return false for invalid row number', () => {
    let board = [
        ['X', '_', 'X'],
        ['_', 'O', '_'],
        ['O', '_', '_']
    ];
    expect(checkRow(board, 'X', 3)).toBe(false);
});
});

describe('check column', () => { 
test('should return true if player has filled all squares in the specified column', () => {
    let board = [
        ['O', 'X', '_'],
        ['O', 'X', '_'],
        ['O', '_', 'X']
    ];
    expect(checkColumn(board, 'O', 0)).toBe(true);
});

test('should return false if player has not filled all squares in the specified column', () => {
    let board = [
        ['O', 'X', '_'],
        ['_', 'X', '_'],
        ['O', '_', 'X']
    ];
    expect(checkColumn(board, 'O', 0)).toBe(false);
});
//invalid column number
test('should return false for invalid column number', () => {
    let board = [
        ['O', 'X', '_'],
        ['_', 'X', '_'],
        ['O', '_', 'X']
    ];
    expect(checkColumn(board, 'O', -1)).toBe(false);
});
});

describe('check diagonal', () => { 
test('should return true if player has filled all squares in a diagonal', () => {
    let board = [
        ['X', '_', 'O'],
        ['_', 'X', '_'],
        ['O', '_', 'X']
    ];
    expect(checkDiagonal(board, 'X')).toBe(true);
});

test('should return false if player has not filled all squares in a diagonal', () => {
    let board = [
        ['X', '_', 'O'],
        ['_', 'O', '_'],
        ['O', '_', 'X']
    ];
    expect(checkDiagonal(board, 'X')).toBe(false);
});
});
