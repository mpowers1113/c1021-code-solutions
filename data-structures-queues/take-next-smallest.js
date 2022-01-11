/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  while (queue.peek() !== undefined) {
    const first = queue.dequeue();
    if (queue.peek() === undefined) return first;
    if (first < queue.peek()) return first;
    queue.enqueue(first);
  }
}
