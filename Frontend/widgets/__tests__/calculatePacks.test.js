import calculatePacks from "../src/helperFunctions/calculatePacks";
import "@testing-library/jest-dom";

describe("calculatePacks", () => {
  test("throws an error for invalid input", () => {
    expect(() =>
      calculatePacks("not a number", [5000, 2000, 1000, 500, 250])
    ).toThrow("Invalid input");
    expect(() => calculatePacks(-1, [5000, 2000, 1000, 500, 250])).toThrow(
      "Invalid input"
    );
    expect(() => calculatePacks(0, [5000, 2000, 1000, 500, 250])).toThrow(
      "Invalid input"
    );
  });

  test("calculates correct package sizes for valid input", () => {
    expect(calculatePacks(1, [5000, 2000, 1000, 500, 250])).toEqual([250]);
    expect(calculatePacks(250, [5000, 2000, 1000, 500, 250])).toEqual([250]);
    expect(calculatePacks(251, [5000, 2000, 1000, 500, 250])).toEqual([500]);
  });
  expect(calculatePacks(501, [5000, 2000, 1000, 500, 250])).toEqual([500, 250]);
  expect(calculatePacks(12001, [5000, 2000, 1000, 500, 250])).toEqual([
    5000, 5000, 2000, 250,
  ]);
});
