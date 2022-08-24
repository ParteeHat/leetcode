function merge(value1, value2, var1) {
  var1 = value1 + value2;
}

function convert(value) {
  var dict = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var total = 0;
  var input = value.split('');

  for (let x = 0; x < input.length; x++) {
    if (dict[input[x + 1]] > dict[input[x]]) {
      //next one is greater
      total += dict[input[x + 1]] - dict[input[x]];
      x++;
      continue;
    } else if (
      dict[input[x + 1]] <= dict[input[x]] ||
      dict[input[x + 1]] == null
    ) {
      // next one is less than or equal to (or null)
      total += dict[input[x]];
    }
  }
  return total;
}
console.log(convert('MMXXII'));
