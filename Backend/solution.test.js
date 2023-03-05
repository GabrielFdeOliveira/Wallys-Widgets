const { expect } = require("@jest/globals");
const calculatePacks = require('./solution.js');

describe('Tests for calculatePacks function', () => {
    
  it('should throw error for input equal to 0', () => {
    expect(() => calculatePacks(0)).toThrow('Invalid input');
  });

  it('should throw error for input smaller than 0', () => {
    expect(() => calculatePacks(-1)).toThrow('Invalid input');
  });

  it('should throw error for non-numeric input', () => {
    expect(() => calculatePacks('string')).toThrow('Invalid input');
  });   

  it('should return correct packs for order of 1', () => {
    expect(calculatePacks(1)).toEqual([250]);
  });
  
  it('should return correct packs for order of 250', () => {
    expect(calculatePacks(250)).toEqual([250]);
  });
  
  it('should return correct packs for order of 251', () => {
    expect(calculatePacks(251)).toEqual([500]);
  });

  it('should return correct packs for order of 500', () => {
    expect(calculatePacks(500)).toEqual([500]);
  });

  it('should return correct packs for order of 501', () => {
    expect(calculatePacks(501)).toEqual([500, 250]);
  });

  it('should return correct packs for order of 12.001', () => {
    expect(calculatePacks(12001)).toEqual([5000, 5000, 2000, 250]);
  });

});
