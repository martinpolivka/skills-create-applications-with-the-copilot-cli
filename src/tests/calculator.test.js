const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

// ============================================================
// Addition tests (+)
// ============================================================
describe("add", () => {
  test("adds two positive numbers (2 + 3 = 5)", () => {
    expect(add([2, 3])).toBe(5);
  });

  test("adds multiple numbers", () => {
    expect(add([1, 2, 3, 4])).toBe(10);
  });

  test("adds negative numbers", () => {
    expect(add([-1, -2])).toBe(-3);
  });

  test("adds mixed positive and negative numbers", () => {
    expect(add([5, -3])).toBe(2);
  });

  test("adds with zero", () => {
    expect(add([0, 5])).toBe(5);
  });

  test("adds decimal numbers", () => {
    expect(add([1.5, 2.5])).toBe(4);
  });

  test("adds large numbers", () => {
    expect(add([1000000, 2000000])).toBe(3000000);
  });
});

// ============================================================
// Subtraction tests (-)
// ============================================================
describe("subtract", () => {
  test("subtracts two positive numbers (10 - 4 = 6)", () => {
    expect(subtract([10, 4])).toBe(6);
  });

  test("subtracts multiple numbers sequentially", () => {
    expect(subtract([20, 5, 3])).toBe(12);
  });

  test("subtracts resulting in negative", () => {
    expect(subtract([3, 10])).toBe(-7);
  });

  test("subtracts negative numbers", () => {
    expect(subtract([5, -3])).toBe(8);
  });

  test("subtracts zero", () => {
    expect(subtract([10, 0])).toBe(10);
  });

  test("subtracts from zero", () => {
    expect(subtract([0, 5])).toBe(-5);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract([10.5, 3.2])).toBeCloseTo(7.3);
  });
});

// ============================================================
// Multiplication tests (×)
// ============================================================
describe("multiply", () => {
  test("multiplies two positive numbers (45 * 2 = 90)", () => {
    expect(multiply([45, 2])).toBe(90);
  });

  test("multiplies multiple numbers", () => {
    expect(multiply([2, 3, 4])).toBe(24);
  });

  test("multiplies by zero", () => {
    expect(multiply([5, 0])).toBe(0);
  });

  test("multiplies negative numbers", () => {
    expect(multiply([-3, -4])).toBe(12);
  });

  test("multiplies mixed positive and negative", () => {
    expect(multiply([3, -4])).toBe(-12);
  });

  test("multiplies by one (identity)", () => {
    expect(multiply([7, 1])).toBe(7);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply([2.5, 4])).toBe(10);
  });

  test("multiplies large numbers", () => {
    expect(multiply([1000, 1000])).toBe(1000000);
  });
});

// ============================================================
// Division tests (÷)
// ============================================================
describe("divide", () => {
  test("divides two positive numbers (20 / 5 = 4)", () => {
    expect(divide([20, 5])).toBe(4);
  });

  test("divides with remainder (decimal result)", () => {
    expect(divide([10, 3])).toBeCloseTo(3.3333, 4);
  });

  test("divides multiple numbers sequentially", () => {
    expect(divide([100, 2, 5])).toBe(10);
  });

  test("divides negative numbers", () => {
    expect(divide([-12, 3])).toBe(-4);
  });

  test("divides two negative numbers (result positive)", () => {
    expect(divide([-12, -3])).toBe(4);
  });

  test("divides zero by a number", () => {
    expect(divide([0, 5])).toBe(0);
  });

  test("divides by one (identity)", () => {
    expect(divide([7, 1])).toBe(7);
  });

  test("divides decimal numbers", () => {
    expect(divide([7.5, 2.5])).toBe(3);
  });

  // Edge case: division by zero
  test("throws error on division by zero", () => {
    expect(() => divide([10, 0])).toThrow("Division by zero is not allowed.");
  });

  test("throws error when any divisor is zero", () => {
    expect(() => divide([10, 2, 0])).toThrow("Division by zero is not allowed.");
  });
});

// ============================================================
// Modulo tests (%)
// ============================================================
describe("modulo", () => {
  test("computes modulo of two positive numbers (5 % 2 = 1)", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("computes modulo with no remainder (10 % 5 = 0)", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("computes modulo with larger divisor (3 % 7 = 3)", () => {
    expect(modulo(3, 7)).toBe(3);
  });

  test("computes modulo with negative dividend (-5 % 2 = -1)", () => {
    expect(modulo(-5, 2)).toBe(-1);
  });

  test("computes modulo with negative divisor (5 % -2 = 1)", () => {
    expect(modulo(5, -2)).toBe(1);
  });

  test("computes modulo with decimal numbers (5.5 % 2 = 1.5)", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("throws error on modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

// ============================================================
// Exponentiation tests (^)
// ============================================================
describe("power", () => {
  test("raises base to exponent (2 ^ 3 = 8)", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("raises to power of zero (5 ^ 0 = 1)", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("raises to power of one (7 ^ 1 = 7)", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("raises to negative exponent (2 ^ -2 = 0.25)", () => {
    expect(power(2, -2)).toBe(0.25);
  });

  test("raises zero to positive exponent (0 ^ 5 = 0)", () => {
    expect(power(0, 5)).toBe(0);
  });

  test("raises negative base to even exponent (-3 ^ 2 = 9)", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("raises negative base to odd exponent (-3 ^ 3 = -27)", () => {
    expect(power(-3, 3)).toBe(-27);
  });

  test("raises decimal base (1.5 ^ 2 = 2.25)", () => {
    expect(power(1.5, 2)).toBe(2.25);
  });
});

// ============================================================
// Square Root tests (√)
// ============================================================
describe("squareRoot", () => {
  test("computes square root of perfect square (√16 = 4)", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("computes square root of another perfect square (√9 = 3)", () => {
    expect(squareRoot(9)).toBe(3);
  });

  test("computes square root of zero (√0 = 0)", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("computes square root of one (√1 = 1)", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("computes square root of non-perfect square (√2 ≈ 1.4142)", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test("computes square root of decimal (√0.25 = 0.5)", () => {
    expect(squareRoot(0.25)).toBe(0.5);
  });

  test("computes square root of large number (√10000 = 100)", () => {
    expect(squareRoot(10000)).toBe(100);
  });

  // Edge case: negative number
  test("throws error for square root of negative number", () => {
    expect(() => squareRoot(-1)).toThrow("Square root of a negative number is not allowed.");
  });

  test("throws error for square root of any negative number", () => {
    expect(() => squareRoot(-16)).toThrow("Square root of a negative number is not allowed.");
  });
});
