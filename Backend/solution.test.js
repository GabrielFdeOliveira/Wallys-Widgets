const { test, expect } = require("@jest/globals");
const calculatePacks = require('./solution.js');

describe('Wallys Widgets - order', () => {
  test('should return correct packs for order of 1', () => {
    expect(calculatePacks(255)).toBe([{ packSize: 500, quantity: 1 }]);
  });

  test('should throw error for invalid input', () => {
    expect(() => calculatePacks(-1)).toThrow('Invalid input');
  });
});
