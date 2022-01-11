/* exported maxValue */

function maxValue(stack) {
  let maxValue = stack.peek();
  if (maxValue === undefined) return -Infinity;
  while (stack.peek() !== undefined) {
    if (stack.peek() > maxValue) maxValue = stack.peek();
    stack.pop();
  }
  return maxValue;
}
