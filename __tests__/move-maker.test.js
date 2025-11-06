import {makeMove, validateMove} from "../move-maker.js";

test("should return false for an invalid move",()=>{
    expect(validateMove("1,1",[
        ['X', '_', '_'],
        ['_', 'X', '_'],
        ['O', 'O', 'X']
    ])).toBe(false)
    expect(validateMove("0,1",[
        ['X', '_', '_'],
        ['_', 'X', '_'],
        ['O', 'O', 'X']
    ])).toBe(false)
})
test("should return true for a valid move",()=>{
    expect(validateMove("1,2",[
        ['X', '_', '_'],
        ['_', 'X', '_'],
        ['O', 'O', 'X']
    ])).toBe(true)
})

test("should update board for a valid move", () => {
 const board=
 [["X", "_", "_"],
 ["_", "X", "_"],
 ["O", "O", "X"]]
 const move="1,2"
 const player="X"
 const expectedBoard = [
   ["X", "X", "_"],
   ["_", "X", "_"],
   ["O", "O", "X"],
 ];
   makeMove(board,move,player)
   console.log(board);
   
   expect(board).toEqual(expectedBoard)})
  