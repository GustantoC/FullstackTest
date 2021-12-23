function twoSums(input, target) {
  const result = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] + input[j] === target) {
        result.push([i, j]);
      }
    }
  }
  return result;
}

console.log(twoSums([2, 7, 11, 15], 13))