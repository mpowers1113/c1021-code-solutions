/* exported oddOrEven */
function oddOrEven(numbers) {
  var evenOdds = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenOdds.push('even');
    } else {
      evenOdds.push('odd');
    }
  }
  return evenOdds;
}
