var tictactoe = require('../tictactoe');

describe('tictactoe', function() {

  it('detects horizontal rows', function() {
    expect(tictactoe([
      ['O', 'O', 'O'],
      ['', '', ''],
      ['', '', '']
    ])).toBe('O');
    expect(tictactoe([
      ['', '', ''],
      ['O', 'O', 'O'],
      ['', '', '']
    ])).toBe('O');
    expect(tictactoe([
      ['', '', ''],
      ['', '', ''],
      ['O', 'O', 'O']
    ])).toBe('O');
    expect(tictactoe([
      ['X', 'X', 'X'],
      ['', '', ''],
      ['', '', '']
    ])).toBe('X');
    expect(tictactoe([
      ['', '', ''],
      ['X', 'X', 'X'],
      ['', '', '']
    ])).toBe('X');
    expect(tictactoe([
      ['', '', ''],
      ['', '', ''],
      ['X', 'X', 'X']
    ])).toBe('X');
  });

  it('detects vertical rows', function() {
    expect(tictactoe([
      ['O', '', ''],
      ['O', '', ''],
      ['O', '', ''],
    ])).toBe('O');
    expect(tictactoe([
      ['', 'O', ''],
      ['', 'O', ''],
      ['', 'O', ''],
    ])).toBe('O');
    expect(tictactoe([
      ['', '', 'O'],
      ['', '', 'O'],
      ['', '', 'O'],
    ])).toBe('O');
    expect(tictactoe([
      ['X', '', ''],
      ['X', '', ''],
      ['X', '', ''],
    ])).toBe('X');
    expect(tictactoe([
      ['', 'X', ''],
      ['', 'X', ''],
      ['', 'X', ''],
    ])).toBe('X');
    expect(tictactoe([
      ['', '', 'X'],
      ['', '', 'X'],
      ['', '', 'X'],
    ])).toBe('X');
  });

  it('detects diagnals', function() {
    expect(tictactoe([
      ['O', '', ''],
      ['', 'O', ''],
      ['', '', 'O']
    ])).toBe('O');
    expect(tictactoe([
      ['', '', 'O'],
      ['', 'O', ''],
      ['O', '', '']
    ])).toBe('O');
    expect(tictactoe([
      ['X', '', ''],
      ['', 'X', ''],
      ['', '', 'X']
    ])).toBe('X');
    expect(tictactoe([
      ['', '', 'X'],
      ['', 'X', ''],
      ['X', '', '']
    ])).toBe('X');
  });

  it('returns nothing when no winner', function() {
    expect(tictactoe([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ])).toBe(null);
    expect(tictactoe([
      ['X', 'O', 'X'],
      ['O', 'X', 'O'],
      ['O', 'X', 'O'],
    ])).toBe(null);
  });

});
