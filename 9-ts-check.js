// @ts-check

let thing = 1234;
thing = "asdf";

/**
 * Format a number
 * @param num {number} Some decimal number
 * @return {string}
 */
function format(num) {
  return num.toFixed(2);
}

format("1234");
