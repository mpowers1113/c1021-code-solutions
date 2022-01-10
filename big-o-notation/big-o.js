/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= O(n)
    i++                             // 2 * n = O(2n) ~= O(n)
  ) {
    const word = words[i];          // 1 * 1  = O(1)
    if (!seen[word]) {              // 1 * 1 = O(1)
      seen[word] = true;
      unique[unique.length] = word; // 1 * 1 = O(1)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) ~= O(n)
    i++                             // 2 * n = O(2n) ~= O(n)
  ) {
    const word = words[i];          // 1 * 1 = O(1)
    let isUnique = true;            // 1 * 1 = O(1)
    for (
      let c = 0;                    // 1 * 1 = O(1)
      c < i;                        // 4 * n = O(4n^2) ~= O(n^2)
      c++                           // 4 * n = = O(4n^2) ~= O(n^2)
    ) {
      const comparing = words[c];   // 4 * n = = O(4n^2) ~= O(n^2)
      if (comparing === word) {     // 4 * n = = O(4n^2) ~= O(n^2)
        isUnique = false;           // 4 * n = = O(4n^2) ~= O(n^2)
      }
    }
    if (isUnique) {                 // 1 * 1 = O(1)
      unique[unique.length] = word; // 2 * n = O(2n) ~= O(n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
