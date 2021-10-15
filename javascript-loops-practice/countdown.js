/* exported countdown */
function countdown(number) {
  var tickTock = [];
  for (var i = number; i >= 0; i--) {
    tickTock.push(i);
  }
  return tickTock;
}
