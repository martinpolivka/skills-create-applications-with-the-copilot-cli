/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   - Addition (+): add two or more numbers
 *   - Subtraction (-): subtract numbers
 *   - Multiplication (×): multiply numbers
 *   - Division (÷): divide numbers (with division by zero handling)
 *   - Modulo (%): returns the remainder of a divided by b
 *   - Exponentiation (^): raises base to the power of exponent
 *   - Square Root (√): returns the square root of a number
 *
 * Usage:
 *   node calculator.js add <num1> <num2> [...]
 *   node calculator.js subtract <num1> <num2> [...]
 *   node calculator.js multiply <num1> <num2> [...]
 *   node calculator.js divide <num1> <num2> [...]
 *   node calculator.js modulo <num1> <num2>
 *   node calculator.js power <base> <exponent>
 *   node calculator.js squareRoot <num>
 */

// Addition: sum all provided numbers
function add(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Subtraction: subtract subsequent numbers from the first
function subtract(numbers) {
  return numbers.reduce((diff, num, i) => (i === 0 ? num : diff - num), 0);
}

// Multiplication: multiply all provided numbers
function multiply(numbers) {
  return numbers.reduce((product, num) => product * num, 1);
}

// Division: divide the first number by subsequent numbers
function divide(numbers) {
  if (numbers.slice(1).includes(0)) {
    throw new Error("Division by zero is not allowed.");
  }
  return numbers.reduce((quotient, num, i) => (i === 0 ? num : quotient / num), 0);
}

// Modulo: returns the remainder of a divided by b
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

// Exponentiation: returns base raised to the exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(n);
}

// Export functions for testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);
  const operation = args[0];
  const numbers = args.slice(1).map(Number);

  // Validate input
  if (!operation) {
    console.error("Error: No operation provided.");
    console.error("Usage: node calculator.js <operation> <num1> <num2> [...]");
    console.error("Operations: add, subtract, multiply, divide");
    process.exit(1);
  }

  if (operation === "squareRoot" && numbers.length < 1) {
    console.error("Error: At least one number is required for squareRoot.");
    process.exit(1);
  } else if (operation !== "squareRoot" && numbers.length < 2) {
    console.error("Error: At least two numbers are required.");
    process.exit(1);
  }

  if (numbers.some(isNaN)) {
    console.error("Error: All arguments after the operation must be valid numbers.");
    process.exit(1);
  }

  let result;

  switch (operation) {
    case "add":
      result = add(numbers);
      break;
    case "subtract":
      result = subtract(numbers);
      break;
    case "multiply":
      result = multiply(numbers);
      break;
    case "divide":
      try {
        result = divide(numbers);
      } catch (e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
      }
      break;
    case "modulo":
      try {
        result = modulo(numbers[0], numbers[1]);
      } catch (e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
      }
      break;
    case "power":
      result = power(numbers[0], numbers[1]);
      break;
    case "squareRoot":
      try {
        result = squareRoot(numbers[0]);
      } catch (e) {
        console.error(`Error: ${e.message}`);
        process.exit(1);
      }
      break;
    default:
      console.error(`Error: Unknown operation '${operation}'.`);
      console.error("Valid operations: add, subtract, multiply, divide, modulo, power, squareRoot");
      process.exit(1);
  }

  console.log(`Result: ${result}`);
}
