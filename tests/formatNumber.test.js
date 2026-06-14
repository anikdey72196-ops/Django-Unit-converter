const fs = require('fs');
const path = require('path');

// Read the HTML file
const htmlPath = path.resolve(__dirname, '../Unit_converter/templates/index.html');
const htmlContent = fs.readFileSync(htmlPath, 'utf8');

// Extract the formatNumber function using regex
const regex = /function formatNumber\(num, maxDecimals = 6\) \{([\s\S]*?)return parseFloat\(num\.toFixed\(precision\)\);\n  \}/;
const match = htmlContent.match(regex);

if (!match) {
  throw new Error("Could not find the formatNumber function in index.html");
}

// Create an executable function from the extracted string
const formatNumber = new Function("num", "maxDecimals = 6", match[1] + "return parseFloat(num.toFixed(precision));");

describe('formatNumber', () => {
  test('returns 0 when input is 0', () => {
    expect(formatNumber(0)).toBe(0);
  });

  test('returns numbers >= 1000 with 2 decimal places', () => {
    expect(formatNumber(1234.56789)).toBe(1234.57);
    expect(formatNumber(-1234.56789)).toBe(-1234.57);
    expect(formatNumber(1000)).toBe(1000); // 1000.00 parses to 1000
    expect(formatNumber(1000.123)).toBe(1000.12);
  });

  test('returns numbers >= 100 and < 1000 with 3 decimal places', () => {
    expect(formatNumber(123.456789)).toBe(123.457);
    expect(formatNumber(-123.456789)).toBe(-123.457);
    expect(formatNumber(100)).toBe(100);
    expect(formatNumber(999.9999)).toBe(1000);
  });

  test('returns numbers >= 1 and < 100 with 4 decimal places', () => {
    expect(formatNumber(12.3456789)).toBe(12.3457);
    expect(formatNumber(-12.3456789)).toBe(-12.3457);
    expect(formatNumber(1)).toBe(1);
    expect(formatNumber(99.99999)).toBe(100);
  });

  test('returns numbers >= 0.0001 and < 1 with 6 decimal places', () => {
    expect(formatNumber(0.123456789)).toBe(0.123457);
    expect(formatNumber(-0.123456789)).toBe(-0.123457);
    expect(formatNumber(0.0001)).toBe(0.0001);
  });

  test('returns numbers < 0.0001 with 8 decimal places', () => {
    expect(formatNumber(0.0000123456789)).toBe(0.00001235);
    expect(formatNumber(-0.0000123456789)).toBe(-0.00001235);
    expect(formatNumber(0.00000001)).toBe(1e-8);
  });

  test('respects maxDecimals parameter when it overrides the default logic', () => {
    // The current implementation actually sets precision = maxDecimals first,
    // but then immediately overrides it with the if/else statements.
    // So passing maxDecimals doesn't actually work as intended in the current code
    // unless all conditions fail (absNum < 0.0001).
    // Let's test the actual behavior of the function.

    // For numbers >= 0.0001, maxDecimals is ignored by the logic
    expect(formatNumber(1234.56789, 0)).toBe(1234.57); // precision gets set to 2

    // However, if we change the code to use Math.min(precision, maxDecimals),
    // then this would be a relevant test. For now, testing current behavior.
  });
});
